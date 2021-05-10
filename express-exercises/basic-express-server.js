// could also write as an IIFE
const app = require('express')();

// const express = require('express');
// const app = express();

app.get('/', (req, res) => {
    console.log("user hit the resource");
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

// handles all http methods
app.all('*', (req, res) => {
    res.status(404).send('<h1> Not Found </h1>');
})

app.listen(5000, (req, res) => {
    console.log("Listening on port 5000");
});