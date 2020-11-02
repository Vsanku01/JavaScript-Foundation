const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

// Routes
const AuthRoute = require('./routes/auth');

const app = express();
app.use(cors());

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', AuthRoute);

// Establish the connection to the database
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  function (err) {
    if (err) return console.log('Error: ', err);
    console.log(
      'MongoDB Connection -- Ready state is:',
      mongoose.connection.readyState
    );
  }
);

// Server Listening
app.listen(process.env.port || 3000);
