// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
