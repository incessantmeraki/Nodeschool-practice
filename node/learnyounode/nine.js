var http = require('http')
var bl = require('bl')
result = []

for (var i = 0; i <3; i++){

http.get(process.argv[2+i], function(response){
  response.pipe(bl(function(err,data){
    console.log(data.toString())
  })
  )
})

}

