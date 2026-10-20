import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 文章集合：src/content/blog/*.md
 * 檔名就是網址 slug（/blog/<檔名>/），底線開頭的檔案（例如 _template.md）不會被收錄。
 * 欄位說明請看 docs/WRITING.md。
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1, '標題不能是空的').max(80, '標題請控制在 80 字以內'),
    description: z
      .string()
      .min(20, '摘要至少 20 個字，會用在列表、搜尋結果與社群分享預覽')
      .max(160, '摘要請控制在 160 字以內'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z
      .array(z.string().regex(/^[^/#?\s]+$/, '標籤不能含有空白或 / # ? 等符號'))
      .max(6, '一篇文章最多 6 個標籤')
      .default([]),
    cover: z.string().startsWith('/images/', '封面請放在 public/images/ 底下並用絕對路徑').optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['zh-TW', 'en']).default('zh-TW'),
    // 轉載／原發表於其他平台時填寫，文章頁會顯示出處
    source: z
      .object({
        name: z.string(),
        url: z.string().url(),
      })
      .optional(),
  }),
});

export const collections = { blog };
