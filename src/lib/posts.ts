import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** 已發佈的文章，新到舊。開發模式（npm run dev）會連草稿一起顯示，正式 build 會排除 draft: true。 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postUrl(post: Post): string {
  return `/blog/${post.id}/`;
}

export function tagUrl(tag: string): string {
  return `/blog/tag/${encodeURIComponent(tag)}/`;
}

const dateFormatter = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Taipei',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

const CJK = /[぀-ヿ㐀-䶿一-鿿豈-﫿ｦ-ﾟ]/g;

/** 粗估閱讀時間：中日韓字每分鐘 400 字，英文每分鐘 200 字。 */
export function readingTime(body: string | undefined): { minutes: number; chars: number } {
  const text = (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  const cjk = (text.match(CJK) || []).length;
  const words = (text.replace(CJK, ' ').match(/[A-Za-z0-9_'-]+/g) || []).length;
  const minutes = Math.max(1, Math.round(cjk / 400 + words / 200));
  return { minutes, chars: cjk + words };
}

/** 所有標籤與篇數，篇數多的在前。 */
export function collectTags(posts: Post[]): Array<{ tag: string; count: number }> {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'zh-Hant'));
}
