'use strict';

exports.provisioningPackagePackage_idHostingHosting_account_idFtpFtp_usernameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * ftp_username (String)
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

exports.provisioningPackagePackage_idHostingHosting_account_idFtpFtp_usernameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * ftp_username (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "user_id" : "aeiou",
  "quota" : 200,
  "ftp_path" : "/www-data",
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

exports.provisioningPackagePackage_idHostingHosting_account_idFtpFtp_usernamePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * ftp_username (String)
  * ftpUserUpdate (FtpUserUpdate)
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

exports.provisioningPackagePackage_idHostingHosting_account_idFtpGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "user_id" : "aeiou",
  "quota" : 200,
  "ftp_path" : "/www-data",
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

exports.provisioningPackagePackage_idHostingHosting_account_idFtpPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * ftpUserCreate (FtpUserCreate)
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

