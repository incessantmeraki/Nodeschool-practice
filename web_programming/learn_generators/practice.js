  function *foo (){
    var stop = yield 'woo';
    console.log(stop, 'inside foo');
  }()

  for(t of foo){
    console.log(t);
  }

