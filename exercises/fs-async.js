// const { readFile, writeFile } = require('fs');
// async function so we pass in the path and a callback function
// if you don't pass in the utf-8 encoding, you get a buffer
// asynchronous -> task starts and is immediately offloaded so we can run other tasks before the first one finishes
// console.log('start');
// --------------------------
// NESTED CALLBACK HELL
// --------------------------
// readFile('./content/new.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// console.log(result);
// const newText = result;
// readFile('./content/test2.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// console.log(result);
//         const newTextTest = result;
//     });
//     writeFile('./content/newtesttext2.txt', 'OH HELL YEAH', 'utf-8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('finish');
//     });

// });

// console.log('start new task');
// --------------------------
// WHY USE ASYNC OVER SYNC
// --------------------------
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home Page')
//     };
//     if (req.url === '/about') {
//         // synchronous code that takes a long time -> traffic jam!
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('About Page')
//     };
//     res.end('404 Page Not Found');
// });

// server.listen(5000, () => {
//     console.log("Listening on port 5000...");
// });
// --------------------------
// RE-WRITE CODE WITH PROMISES
// set up readFile as a Promise

const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// getText('./exercises/content/newtesttext.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// resolve Promise with async/await syntax 
// don't have to nest callbacks when you're waiting for promise to resolve!
const start = async () => {
    try {
        const first = await getText('./exercises/content/new.txt');
        const second = await getText('./exercises/content/test2.txt');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();
// --------------------------
// RE-WRITE CODE WITH PROMISIFY
// --------------------------
const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

// resolve Promise with async/await syntax 
// don't have to nest callbacks when you're waiting for promise to resolve!
const start = async () => {
    try {
        const first = await readFilePromise('./exercises/content/new.txt', 'utf-8');
        const second = await readFilePromise('./exercises/content/test2.txt', 'utf-8');
        await writeFilePromise('./exercises/content/test3.txt', 'HELL YEAH', 'utf-8');
        const third = await readFilePromise('./exercises/content/test3.txt', 'utf-8');
        console.log(first, second, third);
    } catch (error) {
        console.log(error);
    }
};

start();