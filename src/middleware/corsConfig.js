require('dotenv').config()

const corsOptions = {
    origin: process.env.CORS_CONFIG || '*',
    optionsSuccessStatus: 200
}

module.exports = corsOptions;