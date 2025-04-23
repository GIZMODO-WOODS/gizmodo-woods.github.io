#!/bin/bash
set -e

node scripts/generateSitemap.js
node scripts/generateRobotsTest.js
node scripts/generateHtaccess.js

find build -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec gzip -f {} \;
find build -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec brotli -f {} \;
find build -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -delete
