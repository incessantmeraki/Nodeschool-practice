var bl = require('bl')
var http = require('http')

http.get(process.argv[2], function(response){
  response.pipe(bl(function(err,data){
    var output = data.toString()
    console.log(output.length)
    console.log(output)
  }))
  })


