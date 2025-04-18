const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://gizmodo-woods.github.io';

const pages = [
  '/', 
  '/about-us',
  '/tutorial/join',
  '/tutorial/inquiry/faq',
  '/blog',
];

const generateSitemap = () => {
  const publicDir = path.join(__dirname, '../build');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('📂 Create:build/');
  }

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach((page) => {
    let priority = 0.5;
    if (page === '/') priority = 1.0;
    if (page === '/about-us') priority = 0.9;
    if (page === '/tutorial/join') priority = 0.8;
    if (page === '/tutorial/inquiry/faq') priority = 0.7;
    if (page === '/blog') priority = 0.6;

    sitemapContent += `  <url>\n`;
    sitemapContent += `    <loc>${BASE_URL}${page}</loc>\n`;
    sitemapContent += `    <changefreq>weekly</changefreq>\n`;
    sitemapContent += `    <priority>${priority}</priority>\n`;
    sitemapContent += `  </url>\n`;
  });

  sitemapContent += `</urlset>`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log('✅ Sitemap generated:build/sitemap.xml');
};

generateSitemap();
