'use strict';

exports.provisioningHostingHosting_nameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
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

exports.provisioningHostingHosting_nameDatabaseDatabase_nameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
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
    "user_id" : "db-user"
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

exports.provisioningHostingHosting_nameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "bandwidth_quota" : "",
  "ftp_quota" : {
    "consumed" : "",
    "max_available" : "",
    "details" : "aeiou"
  },
  "disk_quota" : "",
  "hosting_account_id" : 1234567,
  "stats_json_url" : "aeiou",
  "hosting_name" : "example.com"
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
  * hosting_name (String)
  * disk_quota (Integer)
  * ftp_quota (Integer)
  * bandwidth_quota (Integer)
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

exports.provisioningHostingHosting_nameStatusGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "comments" : "Enabled after successful payment",
  "hosting_name" : "example.com",
  "status" : "enabled"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameStatusPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * status (String)
  * comments (String)
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

exports.provisioningHostingPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting (Hosting)
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

