// Core Modules
const express = require('express');
// 3rd Pary Modules
const morgan = require('morgan');
// Routers
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Express Init
const app = express();

console.log(process.env.NODE_ENV);

// 1) MIDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
// Serve Static Files Middlware from Express
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routers Midleware
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
