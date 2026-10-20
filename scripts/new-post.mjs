#!/usr/bin/env node
// 建立新文章：npm run new -- "文章標題" my-post-slug [--tags 開發,工具]
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
let tags = [];
const tagsIndex = args.indexOf('--tags');
if (tagsIndex !== -1) {
  tags = (args[tagsIndex + 1] ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
  args.splice(tagsIndex, 2);
}

const [title, slug] = args;
const usage = '用法：npm run new -- "文章標題" my-post-slug [--tags 開發,工具]';

if (!title || !slug) {
  console.error(usage);
  process.exit(1);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('slug 只能用小寫英文、數字與連字號，例如 taiwan-toilet-map-data');
  console.error(usage);
  process.exit(1);
}

const postPath = resolve('src/content/blog', `${slug}.md`);
if (existsSync(postPath)) {
  console.error(`已經有這篇了：${postPath}`);
  process.exit(1);
}

const imageDir = resolve('public/images/blog', slug);
mkdirSync(imageDir, { recursive: true });
writeFileSync(resolve(imageDir, '.gitkeep'), '');

// 以台北時間取今天日期
const today = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
const tagList = `[${tags.map((tag) => JSON.stringify(tag)).join(', ')}]`;

const content = `---
title: "${title.replace(/"/g, '\\"')}"
description: "請在這裡填寫 20 到 160 字的摘要，說明這篇解決了什麼問題、讀完會得到什麼。"
pubDate: ${today}
tags: ${tagList}
draft: true
---

開頭一段：這篇要解決什麼問題、誰會需要、讀完會得到什麼。

## 背景

## 做法

## 結果與學到的事
`;

writeFileSync(postPath, content);
console.log(`已建立 ${postPath}`);
console.log(`圖片放 ${imageDir}/，文章內用 /images/blog/${slug}/檔名 引用。`);
console.log('寫完把 draft 改成 false，推上 main 就會自動部署。規範請看 docs/WRITING.md。');
