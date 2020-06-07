var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//middleware imports
var indexRouter = require('./routes/index');
var formRouter = require('./routes/form');
var dataHandlerRouter = require('./routes/dataHandler');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware declarations
app.use('/api/uploads', express.static('uploads'));
app.use('/', indexRouter);
app.use('/api/form', formRouter);
app.use('/api/datahandler', dataHandlerRouter);
app.use('/api/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

//Listen to 8000
app.listen(8000, (req, res) => {
	console.log('Listening on Port 8000');
});

module.exports = app;
