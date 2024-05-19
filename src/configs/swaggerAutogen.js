const swaggerAutogen = require('swagger-autogen')()
const outputFile = '../docs/swagger.json'
const endpointsFiles = ['../infra/server.js']
require('dotenv').config()

const doc = {
    info: {
        version: "1.0.0",
        title: "contacts-api",
        description: "Simple api thats send mails and saves in relational database."
    },
    host: process.env.API_HOST,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Contacts",
            "description": "Endpoints"
        },
        {
            "name": "Health",
            "description": "Endpoints"
        }
        
    ],
    definitions: {
        send:{
            name: "manoel gomes",
            email: "manuelgome@gmail.com",
            telephone: "12991708065",
            message: "hello, good afternoom."
        },
        list:{
            contacts: [
              {
                id: 1,
                date: "22/07/2023",
                time: "14:30:00",
                name: "fulano ciclano",
                email: "fulado.ciclano@gmail.com",
                telephone: "+55 11 40028922",
                message: "hello, fulano."
              }
            ]
          },
        delete:{
            id: 4
        }   
    },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../index.js')
})