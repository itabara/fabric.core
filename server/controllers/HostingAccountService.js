'use strict';

exports.createHosting = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hostingAccount (HostingAccount)
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

exports.getHosting = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "bandwidth_quota" : "",
  "ftp_quota" : {
    "consumed" : 123456789,
    "max_available" : 123456789,
    "details" : "aeiou"
  },
  "disk_quota" : "",
  "hosting_account_id" : 123456789,
  "stats_json_url" : "aeiou",
  "region" : "aeiou",
  "hosting_name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getHostingStatus = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "comments" : "aeiou",
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

exports.provisioningHostingHosting_nameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
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

exports.provisioningHostingHosting_namePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * hosting_account (Hosting_account)
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

exports.setHostingStatus = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * status (HostingAccountStatus)
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

