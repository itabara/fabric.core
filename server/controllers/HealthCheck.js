'use strict';

var url = require('url');


var HealthCheck = require('./HealthCheckService');


module.exports.pingGET = function pingGET (req, res, next) {
  HealthCheck.pingGET(req.swagger.params, res, next);
};
