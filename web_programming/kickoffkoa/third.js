  var parse = require('co-body');
  var koa = require('koa');
  var app = koa();

  app.use(function *(){
     var body = yield parse(this);
     this.body = body.name.toString().toUpperCase(); 
   }); 

  app.listen(process.argv[2]);
