const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const bodyParser = require('body-parser');

// Routes 
const healthAndCheckingRoutes = require('../routes/actuator/healthAndChecking.js')
const contactsRoutes = require('../routes/contacts/contactsRoutes.js')
const ReportBug = require('../routes/bugReport/bugReportRoutes.js')

// configs
const swaggerFile = require('../docs/swagger.json')
const expressLogger = require('../middleware/loggerExpress.js')
const corsOptions = require('../middleware/corsConfig.js');

const app = express();

// Security config
app.disable("x-powered-by");
app.use(expressLogger);
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}))


// calling my routes
app.use(healthAndCheckingRoutes);
app.use(contactsRoutes);
app.use(ReportBug)
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;