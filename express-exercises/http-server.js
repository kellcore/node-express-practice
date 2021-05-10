const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('../navbar-js/index.html');
const homeStyles = readFileSync('../navbar-js/styles.css');
const homeScript = readFileSync('../navbar-js/browser-app.js');
const homeLogo = readFileSync('../navbar-js/logo.svg');

const server = http.createServer((req, res) => {
    // console.log(req.url);

    const url = req.url;
    console.log(url);
    // home
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
        // about
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
        res.end();

    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeScript);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homeLogo);
        res.end();
    }
    // not found
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1> Page Not Found </h1>');
        res.end();
    }
    // if you don't include res.end, the loading wheel in the browser spins as long as the server is up but nothing ever loads
    // providing metadata about our response

});

server.listen(5000);