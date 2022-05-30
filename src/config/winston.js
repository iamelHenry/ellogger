const { createLogger, format, transports } = require('winston')
const expressWinston = require('express-winston')

const { combine, timestamp, label, printf, colorize } = format

const myFormat = printf(({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`)

const logger = (text) => createLogger({
  format: combine(
    colorize(),
    label({ label: text }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console()
  ]
})

const expressLogger = (text) => expressWinston.logger({
  format: combine(
    colorize(),
    label({ label: text }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console()
  ]
})

module.exports = { logger, expressLogger }
