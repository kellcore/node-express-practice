// const { readFile } = require('fs');

// console.log("begin first task");

// check file path
// readFile is asynchronous -> event loop will offload this to a filesystem -> when the filesystem responds with error or data, then it completes while the rest of the code continues to run
// readFile('./content/newtesttext.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("Oopsie daisy!");
//         return;
//     }
//     console.log(result);
//     console.log("end first task")
// });

// console.log("begin next task");

// start operating system process
// console.log('first');
// setTimeout(() => {
//     console.log('second')
// }, 0);
// console.log('third');
// complete and exit operating system process

// process continues to run until you press ctrl+C or there's an unexpected error
// async actions will be offloaded until it's time, then we run the callback
// every two seconds, the event loop will invoke this callback
// setInterval(() => {
//     console.log("Hello world!")
// }, 2000);
// console.log("I will run first");

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("Hello world");
});
// listen is asynchronous -> event loop is waiting to listen and once requests come in, our callback runs
server.listen(5000, () => {
    console.log("Listening on port 5000...")
});
