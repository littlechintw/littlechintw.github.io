#!/usr/bin/env sh
set -e
npm run build
cd dist
git init 
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:littlechintw/littlechintw.github.io.git
git push origin :gh-pages
git push origin HEAD:gh-pages
cd -