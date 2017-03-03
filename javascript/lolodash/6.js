  var _ = require("lodash");

  var worker = function (collection){
    var a = _.groupBy(collection, function(item){
      return item.username;
    });

    var result=[];
    _.forEach(a, function(item,key){
      result.push({username : key, comment_count : _.size(item)});
    });
    result = _.sortBy(result, function(item){return item.comment_count;}).reverse();
    return result;
  };

  module.exports = worker;

