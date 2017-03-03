var strftime = require('strftime')
var net = require('net')
var server = net.createServer(function (socket) {
  var data;
  data = strftime("%F %R") + '\n'
  socket.end(data)
});

server.listen(process.argv[2])
