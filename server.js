// Requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
// Defined parts of Requirements
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();


// Define Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve Static Assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Define Routes
app.use(routes);

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snapmarket');


// Server Start
app.listen(PORT);
