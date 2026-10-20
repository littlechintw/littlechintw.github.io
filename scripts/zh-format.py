#!/usr/bin/env python3
"""
補 AutoCorrect 沒有的兩條中文排版規則（規則說明見 docs/WRITING.md）：
  1. 中文句子裡的半形括號改全形：睡著了(誤) → 睡著了（誤）
  2. 行內連結前後各空一格：像是[廁所地圖](url)與 → 像是 [廁所地圖](url) 與（碰到全形標點不空）
中英數之間的空格、半形標點改全形、全形標點旁不留空格，交給 AutoCorrect（.autocorrectrc）。

用法：python3 -I scripts/zh-format.py diff|write <資料夾>...
      diff 只印出差異，有需要修改時以 exit code 1 結束；write 直接改檔。
"""
import collections, difflib, pathlib, re, sys

CJK = r'一-鿿㐀-䶿぀-ヿｦ-ﾟ'
LAT = r'A-Za-z0-9'
counts = collections.Counter()


def protect(text):
    """把程式碼、連結目標、網址換成佔位符，避免被改到。"""
    store = []

    def keep(match):
        store.append(match.group(0))
        return '' + chr(0xe100 + len(store) - 1) + ''

    text = re.sub(r'```[\s\S]*?```', keep, text)
    text = re.sub(r'`[^`\n]+`', keep, text)
    text = re.sub(r'\]\([^)\n]*\)', keep, text)
    text = re.sub(r'<https?://[^>\s]+>', keep, text)
    text = re.sub(r'https?://[^\s<>()\]]+', keep, text)
    return text, store


def restore(text, store):
    return re.sub('(.)', lambda m: store[ord(m.group(1)) - 0xe100], text)


def fmt(body):
    text, store = protect(body)

    def sub(name, pattern, repl, s):
        new, n = re.subn(pattern, repl, s)
        counts[name] += n
        return new

    text = sub('半形括號改全形', rf'(?<!\])\(([^()\n]*[{CJK}][^()\n]*)\)', r'（\1）', text)
    text = sub('連結前後空格', rf'(?<=[{CJK}{LAT}])(\[[^\]\n]*\].)', r' \1', text)
    text = sub('連結前後空格', rf'(\[[^\]\n]*\].)(?=[{CJK}{LAT}])', r'\1 ', text)
    return restore(text, store)


def split_frontmatter(src):
    match = re.match(r'^---\n[\s\S]*?\n---\n', src)
    return (match.group(0), src[match.end():]) if match else ('', src)


def main():
    if len(sys.argv) < 3 or sys.argv[1] not in ('diff', 'write'):
        print(__doc__)
        sys.exit(2)
    mode = sys.argv[1]
    paths = [p for arg in sys.argv[2:] for p in sorted(pathlib.Path(arg).glob('*.md'))]
    changed = 0
    for path in paths:
        if path.name.startswith('_'):
            continue
        src = path.read_text()
        fm, body = split_frontmatter(src)
        out = fm + fmt(body)
        if out == src:
            continue
        changed += 1
        if mode == 'write':
            path.write_text(out)
            print(f'已修正 {path}')
        else:
            for line in difflib.unified_diff(src.splitlines(), out.splitlines(), str(path), str(path), lineterm='', n=0):
                if not line.startswith(('---', '+++', '@@')):
                    print(line)
    summary = '、'.join(f'{k} {v} 處' for k, v in counts.items()) or '沒有需要修改的地方'
    print(f'zh-format：{summary}')
    sys.exit(1 if (mode == 'diff' and changed) else 0)


main()
