const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const timeEntryRoute = require('./routes/timeEntryRoute');
const userRoute = require('./routes/userRoute');
const projectRoute = require('./routes/projectRoute');

const app = express();
app.use(helmet());

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP. Please try again in an hour.',
});

app.use('/api', limiter);
app.use(
  express.json({
    limit: '10mb',
  })
);
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(
  hpp({
    whitelist: [
      'taskName',
      'startTime',
      'endTime',
      'assignee',
      'estimatedTime',
    ],
  })
);

app.use(express.static(`${__dirname}/public`));
app.use('/api/v1/timeEntry', timeEntryRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/project', projectRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find the ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
