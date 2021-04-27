// const fs = require('fs');
// fs.readFileSync
// destructured from fs module
const { readFileSync, writeFileSync } = require('fs');
// synchronous -> reads file line by line
console.log('start');
const newText = readFileSync('./content/new.txt', 'utf-8');
const newTextTest = readFileSync('./content/test2.txt', 'utf-8');

console.log(newText, newTextTest);

writeFileSync('./content/newtesttext.txt', 'HELL YEAH', { flag: 'a' });

console.log('finish');

console.log('start next task');

const newTextTestFile = readFileSync('./content/newtesttext.txt', 'utf-8');

console.log(newText, newTextTest, newTextTestFile);
