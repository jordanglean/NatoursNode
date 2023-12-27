const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Init Config .ENV
dotenv.config({ path: './config.env' });

// Connect to database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  })
  .catch((error) => console.log(`DB Connection Error: ${error}`));

const app = require('./app');

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
