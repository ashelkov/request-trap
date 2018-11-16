var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
var logger = require('morgan');
var mongoose = require('mongoose');
var routes = require('./routes');

var app = express();

// apply .env variables 
dotenv.config({
  path: path.join(__dirname, 'config/.env')
});
const { NODE_ENV } = process.env;

// init mongose models
require('./models/request.model');

// mongoose instance connection
const mongodbURL = process.env[`DB_${NODE_ENV}`.toUpperCase()];
const opts = {
  useCreateIndex: true,
  useNewUrlParser: true,
};
mongoose.Promise = global.Promise;
mongoose.connect(mongodbURL, opts, function(err) {
  if (err) {
    console.error(err.message);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middlewares 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
