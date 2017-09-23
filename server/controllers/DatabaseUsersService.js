'use strict';

exports.provisioningHostingHosting_nameDatabaseUserDb_usernameDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
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

exports.provisioningHostingHosting_nameDatabaseUserDb_usernameGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * db_username (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "grants" : [ {
    "database_name" : "aeiou",
    "permissions" : "aeiou"
  } ],
  "password" : "aeiou",
  "db_user" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseUserDb_usernamePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * db_username (String)
  * user_info (User_info_1)
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

exports.provisioningHostingHosting_nameDatabaseUsersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grants" : [ {
    "database_name" : "aeiou",
    "permissions" : "aeiou"
  } ],
  "password" : "aeiou",
  "db_user" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.provisioningHostingHosting_nameDatabaseUsersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorization (String)
  * hosting_name (String)
  * user_info (User_info)
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

