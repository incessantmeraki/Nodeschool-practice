  var inputs = process.argv.slice(2);
  var result = inputs.map( x => x[0].toUpperCase())
                      .reduce((prev,curr) => prev+curr);

  console.log(result);
