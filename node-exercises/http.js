const http = require('http');
// req -> request -> incoming request from a client 
// res -> response -> what we send back
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello world!');
    }
    if (req.url === "/about") {
        res.end("This is the about page")
    }
    res.end(`<h1> 404 Not Found </h1> <p> Your request cannot be completed as typed </p> <a href="/"> home </a>`)
});

server.listen(5000);