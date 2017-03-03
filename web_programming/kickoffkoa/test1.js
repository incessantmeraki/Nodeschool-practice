  var koa = require('koa');

  var app = koa();

  app.use(function* (next){
    console.log('first');
    this.body='haha this is test';
    yield next;
  });

  app.use(function* (){
    console.log('second');
  });

  app.listen(3000);

