'use strict';

exports.createDatabase = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * database_info (Database_info)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "_utid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "status" : "pending"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseDatabase_nameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
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

exports.provisioningHostingHosting_nameDatabaseDatabase_nameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * database_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "database_cluster" : "aeiou",
  "engine_type" : "aeiou",
  "database_name" : "aeiou",
  "database_id" : 123456789,
  "db_size" : "",
  "db_actual_size" : "",
  "db_users" : [ {
    "grants" : [ {
      "database_name" : "aeiou",
      "permissions" : "aeiou"
    } ],
    "password" : "aeiou",
    "db_user" : "aeiou"
  } ],
  "db_connection" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseDatabase_namePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * database_name (String)
  * databaseInfo (DatabaseInfo)
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

exports.provisioningHostingHosting_nameDatabaseGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "database_cluster" : "aeiou",
  "engine_type" : "aeiou",
  "database_name" : "aeiou",
  "database_id" : 123456789,
  "db_size" : "",
  "db_actual_size" : "",
  "db_users" : [ {
    "grants" : [ {
      "database_name" : "aeiou",
      "permissions" : "aeiou"
    } ],
    "password" : "aeiou",
    "db_user" : "aeiou"
  } ],
  "db_connection" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

