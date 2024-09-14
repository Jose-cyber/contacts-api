require('dotenv').config();

const rabbitmq = {
    host: process.env.RABBITMQ_HOST,
    port: process.env.RABBITMQ_PORT || 5672,
    queue: process.env.RABBITMQ_QUEUE,
    user: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASSWORD
}

module.exports = rabbitmq