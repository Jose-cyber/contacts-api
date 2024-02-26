const winston = require('winston');
const { createLogger, transports, format } = require('winston');
const expressWinston = require('express-winston');

const expressLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json({ space: 2 }), // Adiciona espaço para uma melhor formatação
    winston.format.printf(info => `${JSON.stringify({ level: info.level,timestamp: info.timestamp, message: info.message })}`)
  ),
  meta: false,
  msg: "HTTP {{req.method}} {{res.statusCode}} {{req.url}}",
  expressFormat: true,
  ignoreRoute: function (req, res) { return false; },
  statusLevels: false,
  level: function (req, res) {
    let level = "";
    if (res.statusCode >= 100) { level = "info"; }
    if (res.statusCode >= 400) { level = "warn"; }
    if (res.statusCode >= 500) { level = "error"; }
    if (res.statusCode == 401 || res.statusCode == 403) { level = "critical"; }
    if (req.path === "/v1" && level === "info") { level = "warn"; }
    return level;
  },
});


module.exports = expressLogger;