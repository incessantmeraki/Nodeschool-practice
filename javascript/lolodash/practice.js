  _ = require("lodash");
  
  var numbers = [5,2,1,3,4];

  console.log("Before");
  console.log(numbers);

  numbers = _.chain(numbers)
  .sortBy().map(num => num+1).value();

  console.log(numbers);
