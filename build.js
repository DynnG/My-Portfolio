const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', 'style.css', 'developer.css', 'script.js', 'content.js', 'favicon.svg']) {
  fs.copyFileSync(path.join(__dirname, name), path.join(output, name));
}
fs.cpSync(path.join(__dirname, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Static portfolio built in dist.');
