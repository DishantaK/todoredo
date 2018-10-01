// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://dishantak:Latrell21!@ds143717.mlab.com:43717/task', { useNewUrlParser: true });
// Routes
// -----------------

require('./routes/routes.js')(app);

// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})