const winston = require('winston');
const { format } = require('winston');
const expressWinston = require('express-winston');
require('dotenv').config()

// Definindo os níveis de log do Syslog
const syslogLevels = {
  emerg: 0,
  alert: 1,
  critical: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
};

// Configurando o logger com os níveis de log do Syslog
const logger = winston.createLogger({
  levels: syslogLevels,
  format: format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json({ space: 2 }), // Adiciona espaço para uma melhor formatação
    winston.format.printf(info => `${JSON.stringify({ level: info.level, timestamp: info.timestamp, message: info.message })}`)
  ),
  transports: [
    new winston.transports.Console({ level: process.env.LOG_LEVEL })
  ],
});


const expressLogger = expressWinston.logger({
  winstonInstance: logger,
  meta: true,
  msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}}",
  expressFormat: true,
  ignoreRoute: function (req, res) { return false; },
 
  statusLevels: false,
  level: function (req, res) {
    let level = ""
    if (res.statusCode >= 100) { level = "info"; }
    if (res.statusCode >= 400) { level = "warning"; }
    if (res.statusCode >= 500) { level = "error"; }
    // Ops is worried about hacking attempts so make Unauthorized and Forbidden critical
    if (res.statusCode == 401 || res.statusCode == 403) { level = "critical"; }
    // No one should be using the old path, so always warn for those
    if (req.path === "/v1" && level === "info") { level = "warn"; }
    return level;
  },
  
});


module.exports = expressLogger;