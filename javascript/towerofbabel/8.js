  const max = process.argv[2];
  let FizzBuzz = {
    [Symbol.iterator](){
      var i = 0;
      var result;
      return {
      next() {
        i++;
        if (i % 3 == 0 && i % 5 == 0)
          result = "FizzBuzz";
        else if (i % 3 == 0)
          result = "Fizz"
        else if (i % 5 == 0 ) 
          result = "Buzz"
        else result = i ;

        if (i<=max) return { done:false, value:result };
        return {done:true};
      }
      }
    }
  }

  for (var n of FizzBuzz){
    console.log(n);
  }
