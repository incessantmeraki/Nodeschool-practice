  var inputs = process.argv.slice(2);
  var result = inputs.map(x=>x[0]).reduce((a,x)=>a+x);
  console.log(`[${inputs}] becomes "${result}"`);
