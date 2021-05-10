const express = require('express');
const app = express();
// const path = require('path');

// set up static and middleware
// static asset -> server doesn't need to change the file
// ex. images, css
app.use(express.static('../public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-js/index.html'));
// });

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(5000, () => {
    console.log('Server is up and running at 5000');
});