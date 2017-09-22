'use strict';

var url = require('url');


var HostingAccount = require('./HostingAccountService');


module.exports.provisioningHostingHosting_nameDELETE = function provisioningHostingHosting_nameDELETE (req, res, next) {
  HostingAccount.provisioningHostingHosting_nameDELETE(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameGET = function provisioningHostingHosting_nameDatabaseDatabase_nameGET (req, res, next) {
  HostingAccount.provisioningHostingHosting_nameDatabaseDatabase_nameGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameGET = function provisioningHostingHosting_nameGET (req, res, next) {
  HostingAccount.provisioningHostingHosting_nameGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_namePUT = function provisioningHostingHosting_namePUT (req, res, next) {
  HostingAccount.provisioningHostingHosting_namePUT(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameStatusGET = function provisioningHostingHosting_nameStatusGET (req, res, next) {
  HostingAccount.provisioningHostingHosting_nameStatusGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameStatusPUT = function provisioningHostingHosting_nameStatusPUT (req, res, next) {
  HostingAccount.provisioningHostingHosting_nameStatusPUT(req.swagger.params, res, next);
};

module.exports.provisioningHostingPOST = function provisioningHostingPOST (req, res, next) {
  HostingAccount.provisioningHostingPOST(req.swagger.params, res, next);
};
