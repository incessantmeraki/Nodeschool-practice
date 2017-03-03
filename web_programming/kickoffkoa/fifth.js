  var koa = require('koa')
  var app = koa();

  app.use(function*(){
    if (this.request.is('json'))
      this.body = {message : 'hi!'}
    else
      this.body = 'ok'
  });

  app.listen(process.argv[2]);
