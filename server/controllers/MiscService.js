'use strict';

exports.provisioningMiscHosting_nameIis_settingsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "pipeline" : "aeiou",
  "app_name" : "aeiou",
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

exports.provisioningMiscHosting_nameIis_settingsPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * iis_settings (Iis_settings)
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

exports.provisioningMiscHosting_nameLsDepthGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
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

exports.provisioningMiscHosting_nameSecurityAccessGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "rule_id" : 123456789,
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

exports.provisioningMiscHosting_nameSecurityAccessPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * security_rule (Security_rule)
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

exports.provisioningMiscHosting_nameSecurityAccessRule_idDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * rule_id (String)
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

exports.provisioningMiscHosting_nameSecurityAccessRule_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * rule_id (String)
  * security_rule (Security_rule_1)
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

