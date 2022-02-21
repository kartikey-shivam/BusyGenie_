const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception. Shutting down');
  console.log(err.name, err.message);

  process.exit(1);
});
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful');
  });
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection. Shutting down');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
