  var koa = require('koa');
  var app = koa();

  app.use(responseTime());
  app.use(upperCase());

  app.use(function*(){
    this.body = 'hello koa';
  });

  function responseTime(){
    return function*(next){
      var start = new Date;
      yield next;
      var ms = new Date - start;
      this.set('X-Response-Time',ms+'ms');
    }
  };

  function upperCase(){
    return function*(next){
      yield next;
      this.body=this.body.toUpperCase();
    }
  };

  app.listen(process.argv[2]);
