const { logger, expressLogger } = require('./config/winston')

class ElLogger {
  constructor (appName) {
    this.appName = appName || 'noName'
    this.instance = logger(this.appName)
    this.expressInstance = expressLogger(this.appName)
  }

  info (text) {
    return this.instance.info(text)
  }

  error (text) {
    return this.instance.error(text)
  }

  express () {
    return this.expressInstance
  }
}

module.exports = { ElLogger }
