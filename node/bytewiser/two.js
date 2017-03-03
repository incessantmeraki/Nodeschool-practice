var elements = process.argv.slice(2).map(Number)

console.log(new Buffer(elements).toString('hex'))
