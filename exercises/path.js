const path = require('path');

console.log(path.sep);
// filePath will be normalized
const filePath = path.join('/content/', 'subfolder', 'text.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);