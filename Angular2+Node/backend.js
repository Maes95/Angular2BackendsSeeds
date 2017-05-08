var express = require('express'),
    path = require('path'),
    http = require('http');

var router = express.Router();
var app = express();

// To serve public folder
app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));


var server = http.createServer(app).listen(8080);
