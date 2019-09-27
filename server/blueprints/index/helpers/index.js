const winston = require('../../../config/winston');

exports.yourRouteFunction = function(req, res) {
  // winston.error(req,error) will log any error message
  return res.send('Hello World! This is your end Point');
}

module.exports = exports;