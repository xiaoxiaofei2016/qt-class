const koa = require('koa');
const router = require('./router');
const KoaBody = require('koa-body')

const app = new koa();
app.use(KoaBody())
app.use(router.routes())
app.listen(3000, () => {
  console.log('server is run 3000')
})
