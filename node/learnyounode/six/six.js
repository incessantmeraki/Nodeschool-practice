var filter = require('./module6.js')

filter(process.argv[2], process.argv[3], function callback(err,data){
  data.forEach(function(data) {
    console.log(data)
  })
})



