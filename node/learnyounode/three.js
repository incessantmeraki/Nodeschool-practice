var fs = require('fs')

var fileBuffer = fs.readFileSync(process.argv[2])
var noOfLines = fileBuffer.toString().split('\n').length - 1 
console.log(noOfLines);
