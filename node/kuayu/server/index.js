const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const path = require('path');
var router = new KoaRouter();
 
const app = new Koa();
app.use(KoaStatic(path.join(__dirname, './static')));
app.listen(3000, () => {
  console.log('Server is running http://localhost:3000');
})

router.get('/api/books', (ctx, next) => {
  // ctx.router available
  ctx.body = [
    { bookName: 'php入门到精通' },
    { bookName: 'node入门到精通' }
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());