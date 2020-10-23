const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Home');
});

app.get('/hello', function (req, res) {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log("Initialized 3000 port");
});