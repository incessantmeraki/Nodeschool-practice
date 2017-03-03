var uniq = require('uniq')
module.exports = function(str) {
  var arr = str.split(',')
  uniq(arr)
  return arr
}


