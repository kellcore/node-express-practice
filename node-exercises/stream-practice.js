// const { createReadStream } = require('fs');

// const stream = createReadStream('./exercises/content/big.txt');
// const stream = createReadStream('./exercises/content/big.txt', {
//     highWaterMark: 90000,
//     encoding: 'utf-8'
// });
// using event emitter to parse data in chunks instead of saving it to a variable

// by default, the size of the buffer is 64 kb
// we can also control the size of the buffer by passing in highWaterMark when we set up createReadStream 
// stream.on('data', (result) => {
//     console.log(result)
// });

// stream.on('error', (err) => {
//     console.log(err);
// });

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./exercises/content/big.txt', 'utf-8');
    fileStream.on('open', () => {
        // pipe pushes from readstream to writestream
        // if we can read data in chunks, we can also write data in chunks
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err);
    });
})
    .listen(5000);

// instead of sending our file back in one large instance, we're sending it back in chunks