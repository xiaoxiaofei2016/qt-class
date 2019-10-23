// nuxt:vue ssr
// next:react ssr
// nest:node 基于express
const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaView = require('koa-views')
const path = require('path')
const router = KoaRouter()
const bodyParser = require('koa-bodyparser')
  

const app = new Koa()
app.use(bodyParser())
// views 模板引擎 <template> ejs pug
app.use(KoaView(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async (ctx) => {
  // ctx.body = `html`

  const userInfo = { userName: 123, sex: 0, hobby: ['1', '2', '3'] }
  // 服务器渲染
  // spa 同构 
  await ctx.render('index', {
    ...userInfo // 直接把对象传给index.ejs
  }) // render是Koa-views提供的
})

router.get('/login', async (ctx) => {
  await ctx.render('login')
})

router.post('/login', async (ctx) => {// 处理业务
  const data = ctx.request.body
  if (data.useName === '123' && data.pwd === '456')
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('Server is running 3000')
})