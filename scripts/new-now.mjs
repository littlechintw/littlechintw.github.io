#!/usr/bin/env node
// 建立新一期近況：npm run now  （檔名自動用今天日期，例如 src/content/now/2026-10-20.md）
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const today = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
const date = process.argv[2] ?? today;
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('日期格式要是 YYYY-MM-DD，例如：npm run now -- 2026-10-20');
  process.exit(1);
}

const template = resolve('src/content/now/_template.md');
const target = resolve('src/content/now', `${date}.md`);
if (existsSync(target)) {
  console.error(`已經有這一期了：${target}`);
  process.exit(1);
}

copyFileSync(template, target);
console.log(`已建立 ${target}`);
console.log('寫完把 draft 改成 false，推上 main 就會成為 /now/ 的最新一期，舊的自動進歸檔。');
