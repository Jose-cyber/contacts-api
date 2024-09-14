const health = require('../../controllers/health/controllerHealth')
const express = require('express');

const healthAndCheckingRoutes = express.Router();

healthAndCheckingRoutes
    .route('/health')
    .get(health.check, () => {
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