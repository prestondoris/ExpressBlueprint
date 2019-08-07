const express = require('express');
const helpers = require('./helpers');
const middleware = require('./middleware');
const router = express.Router();

router.route('/yourEndPoint')
  .get(/*MIDDLEWARE GOES HERE */helpers.yourRouteFunction);

module.exports = router;