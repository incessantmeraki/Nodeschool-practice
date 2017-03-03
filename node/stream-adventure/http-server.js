var through = require('through2');
var http = require('http');

var tr = through(write, end);

function write(buffer, _, next){
  this.push( buffer.toString().toUpperCase());
  next();
}

function end(done){
  done();
}

var server = http.createServer(function(req,res) {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res);
  }
});

server.listen(process.argv[2]);

