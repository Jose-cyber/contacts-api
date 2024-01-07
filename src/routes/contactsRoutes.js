const ControllerContacts = require('../controllers/controllerContacts.js');
const controllerContacts = new ControllerContacts
const express = require('express');


const contactsRoutes = express.Router();


contactsRoutes
    .route('/api/v1/contacts/send')
    .post(controllerContacts.send, () => {
      // #swagger.tags = ['Contacts']
      
      /*#swagger.parameters['send'] = {
            in: 'body',
            description: 'Register and send information.',
            required: true,
            schema: { $ref: "#/definitions/send" }
        }*/
    })

contactsRoutes
    .route('/api/v1/contacts/list')
    .get(controllerContacts.list, () => {
      // #swagger.tags = ['Contacts']
      // #swagger.description = 'List all contacts from database'

      /* #swagger.responses[200] = { 
           description: "Return a list of objects.", 
           schema: {$ref: "#/definitions/list"}
        }*/

      /* #swagger.responses[500] = { 
           description: "Failed to list contacts.",
           schema: { status: 'Failed'}
        }*/
      
    })
contactsRoutes
    .route('/api/v1/contacts/delete')
    .delete(controllerContacts.delete, () => {
      // #swagger.tags = ['Contacts']

      /*#swagger.parameters['Register id'] = {
            in: 'body',
            description: 'Register information.',
            required: true,
            schema: { $ref: "#/definitions/delete" }
      }*/

    })


module.exports = contactsRoutes;