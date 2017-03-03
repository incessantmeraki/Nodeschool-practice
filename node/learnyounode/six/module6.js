var fs = require('fs')
var path = require('path')

module.exports = function(fileName, extName, cback){
  var finalList = [];
  fs.readdir(fileName, function callback(err,list){
    if (err) return cback(err)
    list.forEach(function(data){
      if (path.extname(data) == '.'+extName)  finalList.push(data)
    })
    return cback(null,finalList)
  })
}

