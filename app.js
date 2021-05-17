var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '/../app'), { maxAge: 86400000 }))
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Node app is working!');
});