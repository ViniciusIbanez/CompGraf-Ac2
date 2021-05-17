var express = require('express');
var app = express();
var path = require('path');
process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});