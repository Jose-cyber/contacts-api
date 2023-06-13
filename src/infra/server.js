const express = require('express');
const healthAndCheckingRoutes = require('../routes/healthAndChecking.js')
const contactsRoutes = require('../routes/contactsRoutes.js')
const app = express();


app.use(healthAndCheckingRoutes);
app.use(contactsRoutes);

module.exports = app;