const fs = require('fs');
const path = require('path');

const robotsContent = `User-agent: *
Disallow:

Sitemap: https://gizmodo-woods.github.io/sitemap.xml
`;

const outputPath = path.join(__dirname, '../build/robots.txt');
fs.writeFileSync(outputPath, robotsContent);
console.log('✅ robots.txt generated: build/robots.txt');
