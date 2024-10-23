#!/bin/bash
pwd
npm run build
rm -rf ./production/static/js/*
cp -r build/static/js/* ./production/static/js
rm -rf ./production/static/css/*
cp -r build/static/css/* ./production/static/css
cp -f build/index.html ./production/index.html
cd production
git add .
git commit -m "$(date +%Y-%m-%d_%H-%M-%S) - Updated build"
git push origin main