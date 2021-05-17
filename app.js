var express = require('express');
var app = express();
var path = require('path');
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Node app is working!');
});
