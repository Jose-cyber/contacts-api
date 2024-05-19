const HealthAndChecking = require('../../controllers/health/controllerHealthAndChecking.js');
const healthAndChecking = new HealthAndChecking
const express = require('express');

const healthAndCheckingRoutes = express.Router();

healthAndCheckingRoutes
    .route('/contacts-api/health')
    .get(healthAndChecking.actuator, () => {
      // #swagger.tags = ['Health']

      /* 
      #swagger.responses[200] = { 
      schema: { status: "UP"},
      description: "Connection to database is health."
      }
      */
      /*
      #swagger.responses[500] = { 
      schema: { status: "DOWN"},
      description: "Failed to connect to database!."
      } 
      
      */
    })


module.exports = healthAndCheckingRoutes;