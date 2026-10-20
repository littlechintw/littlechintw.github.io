import { getCollection, type CollectionEntry } from 'astro:content';

export type NowEntry = CollectionEntry<'now'>;

const ID_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** 近況檔名就是日期：2026-10-20.md → 2026 年 10 月 20 日（台北時間）。檔名不合格式會讓 build 直接失敗。 */
export function entryDate(entry: NowEntry): Date {
  if (!ID_PATTERN.test(entry.id)) {
    throw new Error(`近況頁的檔名必須是 YYYY-MM-DD.md，目前是 src/content/now/${entry.id}.md`);
  }
  const date = new Date(`${entry.id}T00:00:00+08:00`);
  if (Number.isNaN(date.valueOf())) {
    throw new Error(`近況頁的檔名不是有效日期：src/content/now/${entry.id}.md`);
  }
  return date;
}

/** 所有近況，新到舊。開發模式會連草稿一起顯示，正式 build 排除 draft: true。 */
export async function getNowEntries(): Promise<NowEntry[]> {
  const entries = await getCollection('now', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  for (const entry of entries) entryDate(entry);
  return entries.sort((a, b) => b.id.localeCompare(a.id));
}
