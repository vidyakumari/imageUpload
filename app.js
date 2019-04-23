// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');
var routes = require('./routes/routes');

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/imageupload', { useNewUrlParser: true });

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');
app.use(busboy());
app.use(express.static(__dirname));
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

app.use('/', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Start the server
app.listen(port);
console.log('Server starts on port ' + port);