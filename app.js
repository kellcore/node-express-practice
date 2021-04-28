const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile)

// resolve Promise with async/await syntax 
// don't have to nest callbacks when you're waiting for promise to resolve!
const start = async () => {
    try {
        const first = await readFile('./exercises/content/new.txt', 'utf-8');
        const second = await readFile('./exercises/content/test2.txt', 'utf-8');
        await writeFile('./exercises/content/test3.txt', 'HELL YEAH', 'utf-8');
        const third = await readFile('./exercises/content/test3.txt', 'utf-8');
        console.log(first, second, third);
    } catch (error) {
        console.log(error);
    }
};

start();