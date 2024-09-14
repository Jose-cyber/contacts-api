const logger = require('./configs/logger.js');
const app = require('./infra/server.js');
require('dotenv').config()

const PORT = process.env.PORT || 8080

app.listen(process.env.PORT || 8080, () => {
   logger.info(`Server runing on: http://0.0.0.0:${PORT}` )
   logger.info(`server runing in mode: ${process.env.NODE_ENV}`)

})

process.on('uncaughtException', function (exception) {
   logger.error(exception);
});

module.exports = app;