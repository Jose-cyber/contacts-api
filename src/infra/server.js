const express = require('express');
const healthAndCheckingRoutes = require('../routes/healthAndChecking.js')
const contactsRoutes = require('../routes/contactsRoutes.js')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../docs/swagger.json')
const bodyParser = require('body-parser');
const app = express();

// Security config
app.disable("x-powered-by");

// Using body-parser
app.use(bodyParser.json())
app.use(healthAndCheckingRoutes);
app.use(contactsRoutes);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;