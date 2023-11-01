import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import indexRouter from './routes/index.js';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes
app.use('/', indexRouter);


// 404
app.use((req, res, next) => {
  next(createError(404));
});


// Error Handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const responseBody = {
    'status': status,
    'message': err.message,
  }
  res.status(status).send(responseBody)
});


export default app;
