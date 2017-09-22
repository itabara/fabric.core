'use strict';

exports.provisioningHostingHosting_nameDatabaseDatabase_nameDELETE = function(args, res, next) {
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

exports.provisioningHostingHosting_nameDatabaseDatabase_namePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * database_name (String)
  * database_info (DatabaseInfo)
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

exports.provisioningHostingHosting_nameDatabaseUserGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "databases" : [ {
    "database_id" : "aeiou",
    "permissions" : "aeiou"
  } ],
  "password" : "aeiou",
  "user_id" : "db-user"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseUserPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * user (DatabaseUserInfo)
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

exports.provisioningHostingHosting_nameDatabaseUserUser_nameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * user_name (String)
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

exports.provisioningHostingHosting_nameDatabaseUserUser_nameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * user_name (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "databases" : [ {
    "database_id" : "aeiou",
    "permissions" : "aeiou"
  } ],
  "password" : "aeiou",
  "user_id" : "db-user"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseUserUser_namePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * user_name (String)
  * user (DatabaseUserInfo)
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

exports.provisioningHostingHosting_nameDatabasesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
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
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabasesPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * hosting_name (String)
  * database_info (DatabaseInfo)
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

