const HealthAndChecking = require('../controllers/controllerHealthAndChecking.js');
const healthAndChecking = new HealthAndChecking
const express = require('express');

const healthAndCheckingRoutes = express.Router();


healthAndCheckingRoutes
    .route('/')
    .get(healthAndChecking.index)

healthAndCheckingRoutes
    .route('/api/v1/health')
    .get(healthAndChecking.actuator)

healthAndCheckingRoutes
    .route('/api/v1/metrics')
    .get(healthAndChecking.metrics)


module.exports = healthAndCheckingRoutes;