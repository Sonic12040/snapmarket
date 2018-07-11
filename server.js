//Requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Defined parts of Requirements
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;


//Define Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Define Routes
app.use(routes);

//Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snapmarket');


//Server Start
app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}`);
})