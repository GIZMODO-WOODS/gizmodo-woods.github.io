const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://gizmodo-woods.github.io';
const publicDir = path.join(__dirname, '../build');
const now = new Date().toISOString();

// 相対パスとプライオリティの設定（必要なものだけ）
const pages = [
  { loc: '/', priority: 1.0 },
  { loc: '/about-us', priority: 0.9 },
  { loc: '/tutorial/join', priority: 0.8 },
  { loc: '/blog', priority: 0.7 },
  { loc: '/tutorial/inquiry/faq', priority: 0.6 },
  { loc: '/sitemap', priority: 0.5 },
];

// sitemap.xml 本体作成
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

pages.forEach(({ loc, priority }) => {
  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${BASE_URL}${loc}</loc>\n`;
  sitemapContent += `    <lastmod>${now}</lastmod>\n`;
  sitemapContent += `    <changefreq>weekly</changefreq>\n`;
  sitemapContent += `    <priority>${priority}</priority>\n`;
  sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>\n`;

// 書き込み
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('✅ Sitemap generated: build/sitemap.xml');
