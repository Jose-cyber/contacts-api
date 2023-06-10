const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({message: 'contacts api'})
});

app.post('/api/v1/contacts/contact', (req, res) => {

});

app.get('/api/v1/contacts/list', (req, res) => {

});

app.get('/api/v1/contacts/health', (req, res) =>{

});

app.get('/api/v1/contacts/docs', (req, res) =>{

});

module.exports = app;