'use strict';

exports.createFtpUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * ftpUser (FtpUser)
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

exports.deleteFtpUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * username (String)
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

exports.editFtpUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * username (String)
  * ftpUser (FtpUser_1)
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

exports.getFtpUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * username (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "user_id" : "aeiou",
  "quota" : 200,
  "ftp_path" : "aeiou",
  "username" : "admin@example.com"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameFtpGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "user_id" : "aeiou",
  "quota" : 200,
  "ftp_path" : "aeiou",
  "username" : "admin@example.com"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

