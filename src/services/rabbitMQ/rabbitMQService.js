const amqp = require('amqplib/callback_api');
const logger = require('../../configs/logger');
const rabbitmq = require('../../configs/rabbitmqConfig')

const queue = rabbitmq.queue;



class RabbitMQService {

  constructor() {
    this.connection = null;
    this.channel = null;
  }

  // Função para conectar ao RabbitMQ
  connect() {
    return new Promise((resolve, reject) => {
      amqp.connect(`amqp://${rabbitmq.host}:${rabbitmq.port}`, (err, conn) => {
        if (err) {
          return reject(err);
        }
        this.connection = conn;
        conn.createChannel((err, ch) => {
          if (err) {
            return reject(err);
          }
          this.channel = ch;
          logger.info('Connected to RabbitMQ');
          resolve();
        });
      });
    });
  }

  // Função para enviar mensagem para a fila
  sendToQueue(message) {
    if (!this.channel) {
      throw new Error('RabbitMQ channel is not initialized. Call connect() first.');
    }

    const msgBuffer = Buffer.from(JSON.stringify(message));
    this.channel.assertQueue(queue, { durable: false });
    this.channel.sendToQueue(queue, msgBuffer);
    logger.info(`[x] Sent message to ${queue}:`, message);
  }

  // Função para fechar a conexão
  close() {
    if (this.connection) {
      this.connection.close();
      logger.info('RabbitMQ connection closed');
    }
  }
}

module.exports = new RabbitMQService();