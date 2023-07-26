const express = require('express');
const app = express();
const localhost = '127.0.0.1';
const port = '5000';

app.get('/', function(req, res) {
    res.send('Hello, world!');
});

app.listen(port, localhost, () => {
    console.log(`Server listening at http://${localhost}:${port}`);
});
