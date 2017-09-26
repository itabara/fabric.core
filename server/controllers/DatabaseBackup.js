'use strict';

var url = require('url');


var DatabaseBackup = require('./DatabaseBackupService');


module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameBackupsGET = function provisioningHostingHosting_nameDatabaseDatabase_nameBackupsGET (req, res, next) {
  DatabaseBackup.provisioningHostingHosting_nameDatabaseDatabase_nameBackupsGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameBackupsPOST = function provisioningHostingHosting_nameDatabaseDatabase_nameBackupsPOST (req, res, next) {
  DatabaseBackup.provisioningHostingHosting_nameDatabaseDatabase_nameBackupsPOST(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameRestoresGET = function provisioningHostingHosting_nameDatabaseDatabase_nameRestoresGET (req, res, next) {
  DatabaseBackup.provisioningHostingHosting_nameDatabaseDatabase_nameRestoresGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameDatabaseDatabase_nameRestoresPOST = function provisioningHostingHosting_nameDatabaseDatabase_nameRestoresPOST (req, res, next) {
  DatabaseBackup.provisioningHostingHosting_nameDatabaseDatabase_nameRestoresPOST(req.swagger.params, res, next);
};
