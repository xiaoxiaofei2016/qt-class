const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();


app.use(koaStatic(
  path.join(__dirname , './static')
))

router.get('/api/post', async function (ctx) {
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000, () => {
  console.log('server is running 3000');
});
