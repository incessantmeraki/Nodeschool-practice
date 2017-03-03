const dot = '.'.charCodeAt(0)
const bang = '!'.charCodeAt(0)

process.stdin.on('data', function(d){
  for (var i = 0; i < d.length; i++) {
    if (d[i] == dot) d[i] = bang
  }
  console.log(d)
})
