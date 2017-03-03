  var _ = require("lodash");
  var worker = function (collections){
    return _.sortBy(collections, function(item){return -item.quantity;});
  }

  module.exports = worker;


