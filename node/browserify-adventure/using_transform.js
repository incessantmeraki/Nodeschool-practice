var fs = require('fs');
var txt = fs.readFileSync('/usr/loacal/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
var sprintf = require('sprintf');

var lines = txt.split('\n');
lines.forEach(function (line,index){
  if (index % 5 === 0) {
    console.log(sprintf('%3d %s', index, line));
  }
  else {
    console.log('   '+line);
  }
});
