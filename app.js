var path = require('path');
var fs = require('fs');
var os = require('os');
var express = require('express');
var app = express();
const route = require('./routes/routes')
var Busboy = require('busboy')

// define a simple route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
app.use('/', route);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
