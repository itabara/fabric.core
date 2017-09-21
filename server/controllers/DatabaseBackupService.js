'use strict';

exports.provisioningHostingHosting_nameDatabaseDatabase_nameBackupsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * database_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "type" : "aeiou",
  "status" : "aeiou",
  "completed_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseDatabase_nameBackupsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * database_name (String)
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

exports.provisioningHostingHosting_nameDatabaseDatabase_nameRestoresGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * database_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ "" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseDatabase_nameRestoresPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * database_name (String)
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

