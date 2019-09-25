const logHelper = require('../../../config/logHelper');

exports.yourRouteFunction = function(req, res) {
  // logHelper.error(req,error) will log any error message
  return res.send('Hello World! This is your end Point');
}

module.exports = exports;