const ControllerContacts = require('../controllers/controllerContacts.js');
const controllerContacts = new ControllerContacts
const express = require('express');


const contactsRoutes = express.Router();


contactsRoutes
     .route('/api/v1/contacts/send')
     .post(controllerContacts.send)

contactsRoutes
    .route ('/api/v1/contacts/list')
    .get(controllerContacts.list)



module.exports = contactsRoutes;