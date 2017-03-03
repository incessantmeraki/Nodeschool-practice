  var koa = require('koa');
  var app = koa();

  app.use( function *(next){
    if (this.path === '/')
      this.body = 'hello koa';
    if (this.path === '/404')
      this.body = 'page not found';
    if (this.path === '/500')
      this.body = 'internal server error';
  });

  app.listen(process.argv[2]);
