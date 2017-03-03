var trumpet = require('trumpet');
var through = require('through2');

var tr = through(function write(buffer, _, next){
  this.push(buffer.toString().toUpperCase());
  next();
});

var tru = trumpet();

process.stdin.pipe(tru).pipe(process.stdout);

var stream = tru.select('.loud').createStream();
stream.pipe(tr).pipe(stream);

