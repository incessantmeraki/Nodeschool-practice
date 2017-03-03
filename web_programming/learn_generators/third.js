  function *flat3(arr){
    yield arr[0];
    yield arr[1];
  }

  function *flat2(arr){
    yield arr[0];
    yield *flat3(arr[1]);
    yield arr[2];
  }

  function *flat1(arr){
    yield arr[0];
    yield *flat2(arr[1]);
    yield arr[2];
  }

  var A = [1 , [2,[3,4],5],6];

  for (var f of flat1(A)){
    console.log(f);
  }
