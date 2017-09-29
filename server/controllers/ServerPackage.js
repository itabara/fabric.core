'use strict';

var url = require('url');


var ServerPackage = require('./ServerPackageService');


module.exports.createServerPackage = function createServerPackage (req, res, next) {
  ServerPackage.createServerPackage(req.swagger.params, res, next);
};
