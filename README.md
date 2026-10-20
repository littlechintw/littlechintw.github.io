# littlechin.tw

小群（littlechin）的個人網站。[Astro](https://astro.build) + Vue 3 + Tailwind CSS 4，純靜態輸出，部署在 GitHub Pages。

## 開發

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 輸出到 dist/
npm run preview   # 預覽 build 結果
npm run lint:zh   # 中文排版檢查（AutoCorrect + scripts/zh-format.py）
npm run fix:zh    # 直接修正
```

需要 Node.js 22.22 以上。

## 寫文章

```bash
npm run new -- "文章標題" my-post-slug --tags 開發,工具
```

會建立 `src/content/blog/my-post-slug.md` 與 `public/images/blog/my-post-slug/`。
近況頁用 `npm run now`，會在 `src/content/now/` 建立以今天日期命名的檔案。
欄位說明、寫作規範與發佈前檢查清單都在 **[docs/WRITING.md](docs/WRITING.md)**。

## 專案結構

```
src/
├── content/blog/*.md        # 文章（檔名 = 網址 slug）
├── content/now/*.md         # 近況頁，檔名 = 日期（YYYY-MM-DD.md），最新一期自動顯示在 /now/
├── content.config.ts        # 文章 frontmatter 的欄位與驗證規則
├── data.json                # 首頁的個人資料、專案、經歷
├── pages/                   # 每個檔案對應一個網址
│   ├── index.astro          #   /            首頁
│   ├── now.astro            #   /now/        近況（最新一期 + 歸檔）
│   ├── about.astro          #   /about/      關於
│   ├── contact.astro        #   /contact/    聯絡
│   ├── privacy.astro        #   /privacy/    隱私權政策
│   ├── 404.astro            #   404 頁
│   ├── rss.xml.js           #   /rss.xml
│   └── blog/
│       ├── index.astro      #   /blog/              文章列表
│       ├── [...id].astro    #   /blog/<slug>/       文章頁
│       └── tag/[tag].astro  #   /blog/tag/<標籤>/   標籤頁
├── layouts/BaseLayout.astro # 共用 <head>、導覽列、頁尾、SEO meta、JSON-LD
├── components/
│   ├── HomeSections.vue     # 首頁的 Hero、文章、專案、經歷時間軸
│   ├── SiteHeader.astro     # 頂部分頁：首頁／文章／關於／聯絡
│   ├── SiteFooter.astro
│   ├── PostCard.astro
│   └── Analytics.astro      # GA4 與事件追蹤
├── lib/posts.ts             # 文章排序、閱讀時間、標籤工具
└── styles/global.css        # Tailwind 與文章排版
public/
├── images/blog/<slug>/      # 文章圖片
├── ig/index.html            # /ig → Instagram 轉址（含 GA 事件）
├── resume.pdf, resume.html  # 履歷
├── robots.txt, .nojekyll
docs/WRITING.md              # 文章寫作規範
scripts/new-post.mjs         # 建立新文章
scripts/new-now.mjs          # 建立新一期近況（npm run now）
```

## 部署

推上 `main` 後，GitHub Actions（`.github/workflows/build.yml`）會 `npm ci && npm run build`，把 `dist/` 推到 `gh-pages` 分支並設定 CNAME。
Astro 會自動產生 `404.html`、`sitemap-index.xml` 與 `rss.xml`。

## 分析與廣告

- **Google Analytics 4**：`src/components/Analytics.astro`，全站載入。除了 page_view，還有
  `click_outbound`、`contact_click`、`nav_click`、`social_click`、`project_click`、`post_click`、`source_click`、`article_view`、`article_complete`。
  GA 後台建議打開「加強型評估」的捲動與站外連結。
- **Google AdSense**：驗證程式碼在 `src/layouts/BaseLayout.astro` 的 `<head>`（發佈商 ID `ca-pub-5042600791806925`），`ads.txt` 在 `public/ads.txt`。
  隱私權政策（`/privacy/`）已經包含 AdSense 要求的 Cookie 與第三方廣告揭露。
