const winston = require('./winston');

exports.error = function (req,error) {
  winston.error(`${500} Internal Server Error: ${error} --- ${req.method} ${req.originalUrl} - ${req.ip}`);
}

module.exports = exports;