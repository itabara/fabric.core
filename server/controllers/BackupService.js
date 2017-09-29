'use strict';

exports.provisioningPackagePackage_idHostingHosting_account_idBackupGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "type" : "aeiou",
  "status" : "aeiou",
  "completed_date" : "2000-01-23T04:56:07.000+00:00"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idBackupPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * backupSource (BackupSource)
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

exports.provisioningPackagePackage_idHostingHosting_account_idRestoreGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "type" : "aeiou",
  "error" : "aeiou",
  "status" : "aeiou",
  "completed_date" : "2000-01-23T04:56:07.000+00:00"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idRestorePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * webspaceRestore (WebspaceRestore)
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

