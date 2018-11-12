var express = require('express');
var cors = require('cors');

var port = process.env.PORT || 3000;
var app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
	console.log(`Example app listening on port !`);
});
