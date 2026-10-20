// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 近況頁至少有一期發佈（非 draft）時才放進 sitemap
const hasPublishedNow = readdirSync('./src/content/now')
  .filter((file) => /^\d{4}-\d{2}-\d{2}\.md$/.test(file))
  .some((file) => !/^draft:\s*true\s*$/m.test(readFileSync(`./src/content/now/${file}`, 'utf8')));

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://littlechin.tw',
  // 全站都是純靜態輸出（dist/），每個頁面都有自己的 index.html，爬蟲拿到的是 200 + 完整 HTML
  output: 'static',
  compressHTML: true,
  build: {
    // 沿用舊站的 /assets/ 路徑，避開 GitHub Pages 對底線開頭目錄的 Jekyll 處理
    assets: 'assets',
  },
  integrations: [
    vue(),
    sitemap({
      filter: (page) => hasPublishedNow || !page.endsWith('/now/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
