//#region Imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');

var app = express();

var hbs = require('express-handlebars');
var routes = require('./routes/index');
var postsController = require('./routes/postController');

const Database = require('./db');
var BlogPost = require('./models/blogPost');
//#endregion

//#region  View Engine Setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use('/', routes);
app.use('/post', postsController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    error: err.message
  });
});
//#endregion

//#region Connect to Database
var db = new Database();
db.authenticate();

var blogpost = require('./models/blogPost');

//#endregion

require('./testcode/fizzbuzz').apply();

//#region

//#endregion

module.exports = app;
