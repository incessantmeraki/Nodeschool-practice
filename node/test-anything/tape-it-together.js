var test = require('tape')
var fancify = require(process.argv[2])

test('Testing properties of fancify', function(t) {
  t.deepEqual(fancify('Hello'), '~*~Hello~*~', 'wrapping does not work')
  t.deepEqual(fancify('Hello',true), '~*~HELLO~*~', 'second argument does not work')
  t.deepEqual(fancify('Hello',false,'!'), '~!~Hello~!~', 'third argument does not work')
  t.end()
})

