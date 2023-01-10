const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


/* Connect DB */
require('./database/database.config')

const indexRouter = require('./routes/index');

const signupRouter = require('./routes/signup.routes');
const coursesRouter = require('./routes/courses.routes')
const userRouter = require('./routes/user.routes')
const loginRouter = require('./routes/login.routes')
const editProfileRouter = require('./routes/profile.routes')
const commentRouter = require('./routes/comment.routes')
const resetPassRouter = require('./routes/resetPass.routes')
const joinCoursesRouter = require('./routes/joinCourses.routes')

const cors = require('cors')
const app = express()

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/api/listcourses', coursesRouter);
app.use('/api/listusers', userRouter);
app.use('/edit/profile', editProfileRouter)
app.use('/cmt/courses', commentRouter)
app.use('/resetpass', resetPassRouter)
app.use('/joincourses', joinCoursesRouter)


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
  res.render('error');
});

module.exports = app;

