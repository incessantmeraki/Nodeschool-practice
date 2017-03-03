  var _ = require("lodash");
var worker=function(test){

  var op = _.groupBy(test , function(item){return item.article;});
  console.log(op);

  op = _.reduce(op, function(accum, val , key){
    var quantity = 0;
    _.forEach(val, function(item){
      quantity += item.quantity;
    });
    accum[key]=quantity;
    return accum;
  },{});

  var result = [];
  _.forEach(op, function(val , key){
    result.push({article : parseInt(key), total_orders : val});
  });
  
  result = _.sortBy(result, 'total_orders').reverse();
  return result;
}

  module.exports = worker;
