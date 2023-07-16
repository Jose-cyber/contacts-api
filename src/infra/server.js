const express = require('express');
const healthAndCheckingRoutes = require('../routes/healthAndChecking.js')
const contactsRoutes = require('../routes/contactsRoutes.js')
const bodyParser = require('body-parser');
const app = express();
const auth = require('../middleware/auth.js');

// Implementing basic auth in api
app.use(auth)

// Security config
app.disable("x-powered-by");

// Using body-parser
app.use(bodyParser.json())

// Calling my routes
app.use(healthAndCheckingRoutes);
app.use(contactsRoutes);

module.exports = app;