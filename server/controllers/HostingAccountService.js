'use strict';

exports.provisioningPackagePackage_idHostingHosting_account_idDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * database_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "database_cluster" : "cluster-mysql-01",
  "engine_type" : "Mysql",
  "database_name" : "example-db",
  "database_id" : 123456,
  "db_size" : 500,
  "db_actual_size" : 0,
  "db_connection" : "Server=cluster-mysql-01;Database=example-db;Uid=db-user;Pwd=secret;",
  "users" : [ {
    "databases" : [ {
      "database_id" : "aeiou",
      "permissions" : "aeiou"
    } ],
    "password" : "aeiou",
    "db_username" : "db-user"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "bandwidth_quota" : "",
  "ftp_quota" : {
    "consumed" : "",
    "max_available" : "",
    "unlimited" : true,
    "details" : "aeiou"
  },
  "disk_quota" : "",
  "hosting_account_id" : "sid_1234567",
  "stats_json_url" : "aeiou",
  "hosting_name" : "tw94wb-232221.atlas-hosting.com"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * hosting_info (HostingAccount)
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

exports.provisioningPackagePackage_idHostingHosting_account_idStatusGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
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

exports.provisioningPackagePackage_idHostingHosting_account_idStatusPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (Integer)
  * hosting_status (Hosting_status)
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

exports.provisioningPackagePackage_idHostingPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account (HostingAccount)
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

