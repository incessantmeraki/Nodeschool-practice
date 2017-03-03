  var _ = require("lodash");


  var worker = function(collection){
    var test = 'Hello <%= val1 %> (logins: <%= val2 %>)';
    return _.template(test)({val1:collection.name,val2:collection.login.length});
  }

  module.exports = worker;
