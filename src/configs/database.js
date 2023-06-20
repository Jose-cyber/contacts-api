require('dotenv').config()
const config = require('../../knexfile.js');
var environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[environment])


module.exports = knex;