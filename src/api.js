const express = require('express');
const serverless = require("serverless-http");

const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
require('dotenv').config();

const { DB } = process.env;

const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const serverErrorRouter = require('./routes/serverError');
const signRouter = require('./routes/sign');

const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const limiter = require('./middlewares/rateLimiter');

const options = {
  origin: [
    'http://localhost:3000',
    'http://pluxurymoviesexplorer.nomoredomains.monster',
    'https://pluxurymoviesexplorer.nomoredomains.monster',
    'https://yungpluxury.github.io',
    'https://yungpluxury.space',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization', 'Accept'],
  credentials: true,
};

const app = express();

mongoose.connect(DB);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

app.use('*', cors(options));

app.use(requestLogger);

app.use('/.netlify/functions/api', signRouter);

app.use(auth);

app.use('/.netlify/functions/api', usersRouter);
app.use('/.netlify/functions/api', moviesRouter);
app.use('/.netlify/functions/api', serverErrorRouter);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

module.exports = app;
module.exports.handler = serverless(app);