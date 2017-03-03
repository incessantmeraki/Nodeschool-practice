  var _ = require("lodash");

  var worker = function(collection){
    var result = {average:0,underperform:[],overperform:[]};
    var sum = 0;
    _.forEach(collection,function(item){
      sum += item.income;
    });
    var avg= sum/collection.length;
    result.average=avg;
    var grp1 = _.filter(collection,function(item){
      return item.income <= avg;
    });
    grp1 = _.sortBy(grp1,'income');
    var grp2= _.filter(collection,function(item){
      return item.income > avg;
    });
    grp2=_.sortBy(grp2,'income');
    result.underperform = grp1;
    result.overperform = grp2;
    return result;
  };

  module.exports = worker;
