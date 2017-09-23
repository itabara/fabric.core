'use strict';

var url = require('url');


var HostingAccount = require('./HostingAccountService');


module.exports.createHosting = function createHosting (req, res, next) {
  HostingAccount.createHosting(req.swagger.params, res, next);
};

module.exports.getHosting = function getHosting (req, res, next) {
  HostingAccount.getHosting(req.swagger.params, res, next);
};

module.exports.getHostingStatus = function getHostingStatus (req, res, next) {
  HostingAccount.getHostingStatus(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDELETE = function provisioningHostingHosting_nameDELETE (req, res, next) {
  HostingAccount.provisioningHostingHosting_nameDELETE(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_namePUT = function provisioningHostingHosting_namePUT (req, res, next) {
  HostingAccount.provisioningHostingHosting_namePUT(req.swagger.params, res, next);
};

module.exports.setHostingStatus = function setHostingStatus (req, res, next) {
  HostingAccount.setHostingStatus(req.swagger.params, res, next);
};
