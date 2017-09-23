'use strict';

var url = require('url');


var Misc = require('./MiscService');


module.exports.provisioningMiscHosting_nameIis_settingsGET = function provisioningMiscHosting_nameIis_settingsGET (req, res, next) {
  Misc.provisioningMiscHosting_nameIis_settingsGET(req.swagger.params, res, next);
};

module.exports.provisioningMiscHosting_nameIis_settingsPUT = function provisioningMiscHosting_nameIis_settingsPUT (req, res, next) {
  Misc.provisioningMiscHosting_nameIis_settingsPUT(req.swagger.params, res, next);
};

module.exports.provisioningMiscHosting_nameLsDepthGET = function provisioningMiscHosting_nameLsDepthGET (req, res, next) {
  Misc.provisioningMiscHosting_nameLsDepthGET(req.swagger.params, res, next);
};

module.exports.provisioningMiscHosting_nameSecurityAccessGET = function provisioningMiscHosting_nameSecurityAccessGET (req, res, next) {
  Misc.provisioningMiscHosting_nameSecurityAccessGET(req.swagger.params, res, next);
};

module.exports.provisioningMiscHosting_nameSecurityAccessPOST = function provisioningMiscHosting_nameSecurityAccessPOST (req, res, next) {
  Misc.provisioningMiscHosting_nameSecurityAccessPOST(req.swagger.params, res, next);
};

module.exports.provisioningMiscHosting_nameSecurityAccessRule_idDELETE = function provisioningMiscHosting_nameSecurityAccessRule_idDELETE (req, res, next) {
  Misc.provisioningMiscHosting_nameSecurityAccessRule_idDELETE(req.swagger.params, res, next);
};

module.exports.provisioningMiscHosting_nameSecurityAccessRule_idPUT = function provisioningMiscHosting_nameSecurityAccessRule_idPUT (req, res, next) {
  Misc.provisioningMiscHosting_nameSecurityAccessRule_idPUT(req.swagger.params, res, next);
};
