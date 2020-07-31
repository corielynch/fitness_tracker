// Dependencies
// ============
var express        = require('express');
var mongoose 			 = require('mongoose');

// Setting up port and requiring models for syncing
var db = require("./models");

// Instantiate our app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = mongoose.connection
