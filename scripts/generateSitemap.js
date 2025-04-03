const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://gizmodo-woods.github.io';

const pages = [
  '/', 
  '/about-us',
  '/docs/channel-list',
  '/docs/tutorial-inquiry/qa-faq',
  '/docs/tutorial-inquiry/inquiry-support',
  // その他のページを追加するか、動的に取得する
];

const generateSitemap = () => {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach((page) => {
    let priority = 0.5;
    if (page === '/') priority = 1.0;
    if (page === '/about-us') priority = 0.9;
    if (page === '/docs/channel-list') priority = 0.8;
    if (page === '/docs/tutorial-inquiry/qa-faq') priority = 0.7;
    if (page === '/docs/tutorial-inquiry/inquiry-support') priority = 0.6;

    sitemapContent += `  <url>\n`;
    sitemapContent += `    <loc>${BASE_URL}${page}</loc>\n`;
    sitemapContent += `    <changefreq>weekly</changefreq>\n`;
    sitemapContent += `    <priority>${priority}</priority>\n`;
    sitemapContent += `  </url>\n`;
  });

  sitemapContent += `</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapContent);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
