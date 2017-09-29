'use strict';

exports.provisioningPackagePackage_idHostingHosting_account_idIis_settingsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "pipeline" : "aeiou",
  "name" : "aeiou",
  "clr_version" : "aeiou",
  "status" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idIis_settingsPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * iisSettingsUpdate (IisSettingsUpdate)
  **/
  // no response value expected for this operation
  res.end();
}

exports.provisioningPackagePackage_idHostingHosting_account_idLsDepthGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * depth (Integer)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idSecurityAccessGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "rule_id" : "aeiou",
  "access_type" : "aeiou",
  "ip_source" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idSecurityAccessPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * securityRuleCreate (SecurityRuleCreate)
  **/
    var examples = {};
  examples['application/json'] = {
  "_utid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "status" : "pending"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idSecurityAccessRule_idDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * rule_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "_utid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "status" : "pending"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idSecurityAccessRule_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * rule_id (String)
  * securityRuleUpdate (SecurityRuleUpdate)
  **/
    var examples = {};
  examples['application/json'] = {
  "_utid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "status" : "pending"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

