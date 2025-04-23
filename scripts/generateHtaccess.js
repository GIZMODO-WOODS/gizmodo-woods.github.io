const fs = require('fs');
const path = require('path');

const htaccessContent = `ErrorDocument 404 /404.html\n`;
const outputPath = path.join(__dirname, '..', 'build', '.htaccess');

fs.writeFile(outputPath, htaccessContent, (err) => {
  if (err) {
    console.error('❌ htaccess生成に失敗しました:', err);
  } else {
    console.log('✅ htaccess生成:', outputPath);
  }
});
