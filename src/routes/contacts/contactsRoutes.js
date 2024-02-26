const ControllerContacts = require('../../controllers/contacts/controllerContacts.js');
const controllerContacts = new ControllerContacts
const express = require('express');


const contactsRoutes = express.Router();


contactsRoutes
    .route('/contacts-api/api/v1/contacts/send')
    .post(controllerContacts.send, () => {
      // #swagger.tags = ['Contacts']
      
      /*#swagger.parameters['send'] = {
            in: 'body',
            description: 'Register and send information.',
            required: true,
            schema: { $ref: "#/definitions/send" }
      }*/
      
      /* #swagger.responses[200] = { 
           description: "Register data, and sent email",
           schema: { status: 'Success'}
      }*/

      /* #swagger.responses[400] = { 
           description: "Database connection or query failed",
           schema: { Missing: 'Parameters'}
      }*/

      /* #swagger.responses[500] = { 
           description: "Database connection or query failed",
           schema: { status: 'Failed' }
      }*/

      /* #swagger.responses[500] = { 
           description: "Failed to send email",
           schema: { status: 'Failed to send mail'}
      }*/

    })

contactsRoutes
    .route('/contacts-api/api/v1/contacts/list')
    .get(controllerContacts.list, () => {
      // #swagger.tags = ['Contacts']
      // #swagger.description = 'List all contacts from database'

      /* #swagger.responses[200] = { 
           description: "Return a list of objects.", 
           schema: {$ref: "#/definitions/list"}
      }*/
      
      /* #swagger.responses[500] = { 
           description: "Database connection or query failed",
           schema: { status: 'Failed to send mail'}
      }*/

      /* #swagger.responses[400] = { 
           description: "Database connection or query failed",
           schema: { Missing: 'Parameters'}
      }*/
      
    })
contactsRoutes
    .route('/contacts-api/api/v1/contacts/delete')
    .delete(controllerContacts.delete, () => {
      // #swagger.tags = ['Contacts']

      /*#swagger.parameters['Register id'] = {
            in: 'body',
            description: 'Register information.',
            required: true,
            schema: { $ref: "#/definitions/delete" }
      }*/
      
      /* #swagger.responses[200] = { 
           description: "Database connection or query failed",
           schema: { "status": "Success", "message": "Contact 1 deleted successfully." }
      }*/
            
      /* #swagger.responses[500] = { 
           description: "Database connection or query failed",
           schema: { status: 'Failed'}
      }*/

      /* #swagger.responses[400] = { 
           description: "Bad request, missing parameter.",
           schema: { Missing: 'Parameters'}
      }*/
    })


module.exports = contactsRoutes;