'use strict';

var url = require('url');


var Database = require('./DatabaseService');


module.exports.createDatabase = function createDatabase (req, res, next) {
  Database.createDatabase(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameDELETE = function provisioningHostingHosting_nameDatabaseDatabase_nameDELETE (req, res, next) {
  Database.provisioningHostingHosting_nameDatabaseDatabase_nameDELETE(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameGET = function provisioningHostingHosting_nameDatabaseDatabase_nameGET (req, res, next) {
  Database.provisioningHostingHosting_nameDatabaseDatabase_nameGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_namePUT = function provisioningHostingHosting_nameDatabaseDatabase_namePUT (req, res, next) {
  Database.provisioningHostingHosting_nameDatabaseDatabase_namePUT(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseGET = function provisioningHostingHosting_nameDatabaseGET (req, res, next) {
  Database.provisioningHostingHosting_nameDatabaseGET(req.swagger.params, res, next);
};
