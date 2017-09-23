'use strict';

var url = require('url');


var Ftp = require('./FtpService');


module.exports.createFtpUser = function createFtpUser (req, res, next) {
  Ftp.createFtpUser(req.swagger.params, res, next);
};

module.exports.deleteFtpUser = function deleteFtpUser (req, res, next) {
  Ftp.deleteFtpUser(req.swagger.params, res, next);
};

module.exports.editFtpUser = function editFtpUser (req, res, next) {
  Ftp.editFtpUser(req.swagger.params, res, next);
};

module.exports.getFtpUser = function getFtpUser (req, res, next) {
  Ftp.getFtpUser(req.swagger.params, res, next);
};

module.exports.provisioningHostingHosting_nameFtpGET = function provisioningHostingHosting_nameFtpGET (req, res, next) {
  Ftp.provisioningHostingHosting_nameFtpGET(req.swagger.params, res, next);
};
