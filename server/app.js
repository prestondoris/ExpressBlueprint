const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('./config/winston');
const IndexBlueprint = require('./blueprints/index');

const app = express();

app.use(morgan('combined', { stream: winston.logger.stream }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', IndexBlueprint);

// view engine setup
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');



app.get('/', function (req, res, next) {
  return res.render('index', { title: 'Express' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  winston.error(`${err.status || 500} ${err} - ${req.method} ${req.originalUrl} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
