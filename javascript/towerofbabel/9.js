  let max = process.argv[2];
  let FizzBuzz = function*(){
    let num = 1;
    var result;
    while ( num <= max){
      if (num % 15 == 0 )
        result = "FizzBuzz";
      else if ( num % 3 == 0)
        result = "Fizz"
      else if (num % 5 == 0)
        result = "Buzz";
      else 
        result = num;
      num++;
      yield result;
    }
  }();

  for ( var n of FizzBuzz){
    console.log(n);
  }
