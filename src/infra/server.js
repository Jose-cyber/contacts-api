const express = require('express');
const db = require('../database/conection.js')
const app = express();


app.get('/', (req, res) => {
    res.send({message: 'contacts api'})
});

app.post('/api/v1/contacts/contact', (req, res) => {

});

app.get('/api/v1/contacts/list', (req, res) => {

});

app.get('/api/v1/contacts/health', (req, res) =>{
    db.raw("SELECT 1").then(() => {
        res.json("UP").status(200);
    })
    .catch((e) => {
        res.json("DOWN").status(500);
        console.error(e);
    });
});

app.get('/api/v1/contacts/docs', (req, res) =>{

});

module.exports = app;