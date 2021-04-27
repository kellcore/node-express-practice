const { readFile, writeFile } = require('fs');
// async function so we pass in the path and a callback function
// if you don't pass in the utf-8 encoding, you get a buffer
// asynchronous -> task starts and is immediately offloaded so we can run other tasks before the first one finishes
console.log('start');
readFile('./content/new.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const newText = result;
    readFile('./content/test2.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        const newTextTest = result;
    });
    writeFile('./content/newtesttext2.txt', 'OH HELL YEAH', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('finish');
    });

});

console.log('start new task');