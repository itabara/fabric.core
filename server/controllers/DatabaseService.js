'use strict';

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_nameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseDatabase_namePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * database_name (String)
  * databaseUpdate (DatabaseUpdate)
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
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
    "db_username" : "db-user"
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabasePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * databaseCreate (DatabaseCreate)
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseUserDb_usernameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * db_username (String)
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseUserDb_usernameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * db_username (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "databases" : [ {
    "database_id" : "aeiou",
    "permissions" : "aeiou"
  } ],
  "password" : "aeiou",
  "db_username" : "db-user"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseUserDb_usernamePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * db_username (String)
  * databaseUserUpdate (DatabaseUserUpdate)
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

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseUserGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "databases" : [ {
    "database_id" : "aeiou",
    "permissions" : "aeiou"
  } ],
  "password" : "aeiou",
  "db_username" : "db-user"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningPackagePackage_idHostingHosting_account_idDatabaseUserPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * package_id (Long)
  * hosting_account_id (String)
  * databaseUserCreate (DatabaseUserCreate)
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

