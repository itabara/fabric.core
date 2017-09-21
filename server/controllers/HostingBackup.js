'use strict';

var url = require('url');


var HostingBackup = require('./HostingBackupService');


module.exports.provisioningHostingHosting_nameBackupsGET = function provisioningHostingHosting_nameBackupsGET (req, res, next) {
  HostingBackup.provisioningHostingHosting_nameBackupsGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameBackupsPOST = function provisioningHostingHosting_nameBackupsPOST (req, res, next) {
  HostingBackup.provisioningHostingHosting_nameBackupsPOST(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameRestoresGET = function provisioningHostingHosting_nameRestoresGET (req, res, next) {
  HostingBackup.provisioningHostingHosting_nameRestoresGET(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameRestoresPOST = function provisioningHostingHosting_nameRestoresPOST (req, res, next) {
  HostingBackup.provisioningHostingHosting_nameRestoresPOST(req.swagger.params, res, next);
};
