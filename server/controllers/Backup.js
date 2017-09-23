'use strict';

var url = require('url');


var Backup = require('./BackupService');


module.exports.provisioningHostingHosting_nameBackupGET = function provisioningHostingHosting_nameBackupGET (req, res, next) {
  Backup.provisioningHostingHosting_nameBackupGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameBackupPOST = function provisioningHostingHosting_nameBackupPOST (req, res, next) {
  Backup.provisioningHostingHosting_nameBackupPOST(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameRestoreGET = function provisioningHostingHosting_nameRestoreGET (req, res, next) {
  Backup.provisioningHostingHosting_nameRestoreGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameRestorePOST = function provisioningHostingHosting_nameRestorePOST (req, res, next) {
  Backup.provisioningHostingHosting_nameRestorePOST(req.swagger.params, res, next);
};
