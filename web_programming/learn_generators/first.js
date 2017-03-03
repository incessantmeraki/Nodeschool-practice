  function *range(from,to){
    var i = from;
    while(i<=to){
      yield i++;
    }
  }

  for(var b of range(5,10) ){
    console.log(b);
  }
