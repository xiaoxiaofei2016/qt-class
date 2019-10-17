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

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*') // *表示所有源都可以访问
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type') //头
  ctx.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS') //方法
  await next();
})
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  
  ctx.body = [
    { bookName: 'php入门到精通' },
    { bookName: 'node入门到精通' }
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());