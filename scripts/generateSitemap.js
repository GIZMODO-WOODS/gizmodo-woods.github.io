const fs = require('fs');
const path = require('path');
const config = require('../docusaurus.config');

const BASE_URL = 'https://gizmodo-woods.github.io';
const publicDir = path.join(__dirname, '../build');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('📂 Create: build/');
}

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

config.customFields.sitemapPages.forEach(({ loc, priority }) => {
  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${BASE_URL}${loc}</loc>\n`;
  sitemapContent += `    <changefreq>weekly</changefreq>\n`;
  sitemapContent += `    <priority>${priority}</priority>\n`;
  sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>`;
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('✅ Sitemap generated: build/sitemap.xml');
