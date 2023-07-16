require('dotenv').config()
const basicAuth = require('express-basic-auth')

// loading credentials
auth_user = process.env.AUTH_USER
auth_pass = process.env.AUTH_PASSWORD

auth = basicAuth({
    users: { 'admin': 'supersecret' }
})

module.exports = auth;