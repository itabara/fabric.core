'use strict';

var url = require('url');


var DatabaseBackup = require('./DatabaseBackupService');


module.exports.backupDatabase = function backupDatabase (req, res, next) {
  DatabaseBackup.backupDatabase(req.swagger.params, res, next);
};

module.exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameBackupGET = function provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameBackupGET (req, res, next) {
  DatabaseBackup.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameBackupGET(req.swagger.params, res, next);
};

module.exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameRestoreGET = function provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameRestoreGET (req, res, next) {
  DatabaseBackup.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameRestoreGET(req.swagger.params, res, next);
};

module.exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameRestorePOST = function provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameRestorePOST (req, res, next) {
  DatabaseBackup.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameRestorePOST(req.swagger.params, res, next);
};
