const { createLogger, transports, format} = require('winston');

const logger = createLogger({
    transports:[new transports.Console()],
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.json(),
      format.printf(info => `${JSON.stringify({ level: info.level, timestamp: info.timestamp, message: info.message})}`)
    ),
});

module.exports = logger;