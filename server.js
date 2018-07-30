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

// Define Routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
	// SET STATIC SERVER
	app.use(express.static("client/build"));
	// SET ROUTES TO USE INDEX.HTML FILE
	// app.get("*", (req, res) => {
	// 	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	// });
}

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/snapmarket');


// Server Start
app.listen(PORT);
