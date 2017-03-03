var through = require('through2');
var split = require('split');

var cnt = 0;
var tr = through(function(buffer, _, next){
  this.push(cnt % 2 == 0 ? 
    buffer.toString().toLowerCase():
    buffer.toString().toUpperCase());
  this.push('\n');
  cnt++;
  next();
});

process.stdin.pipe(split()) 
  .pipe(tr)
  .pipe(process.stdout);
