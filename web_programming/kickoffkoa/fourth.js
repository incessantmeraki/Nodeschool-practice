  var fs = require('fs');
  var koa = require('koa');
  
  var app=koa();

  app.use(function*(next){
    if (this.path === '/json')
      this.body = { foo : 'bar' };
    if (this.path === '/stream')
      this.body = fs.createReadStream(process.argv[3]);
  });

  app.listen(process.argv[2]);
