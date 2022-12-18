#!/bin/bash

set -euo pipefail

mkdir -p dist/assets

# Static assets
cp -R public/assets/js dist/assets
cp -R public/assets/images dist/assets

# SASS compile to dist
npm run css-compile-no-map

# HTML files
cp public/index.html dist 
cp public/404.html dist

# Favicon files
cp public/android-chrome-192x192.png dist
cp public/android-chrome-384x384.png dist
cp public/apple-touch-icon.png dist
cp public/browserconfig.xml dist
cp public/favicon-16x16.png dist
cp public/favicon-32x32.png dist
cp public/favicon.ico dist
cp public/mstile-150x150.png dist
cp public/safari-pinned-tab.svg dist
cp public/site.webmanifest dist

# CloudFlare Pages Headers configuration
cp public/_headers dist
