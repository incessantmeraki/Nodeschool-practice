var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function callback(err, list){
  if (!err){
    list.forEach(function(data){
      if (path.extname(data) == '.'+process.argv[3])
        console.log(data)
    })
  }
})
