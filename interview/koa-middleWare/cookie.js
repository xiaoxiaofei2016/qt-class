const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()
app.use(router.routes()).use(router.allowedMethods())

let id = 0;
const sessiontable = [ // 会话表，根据session-id找到某个用户

]

router.get('/login', async(ctx, next) => {
  id++;
  let col = {
    id,
    uid
  }
  // session-id
  ctx.cookies.set('login', true, {
    maxAge: 1000 * 60,
    httpOnly: true
  })
  ctx.body = 'login seccess'
})
router.get('/isLogin', async(ctx) => {
  let login = ctx.cookies.get('login')
  if (login) {
    ctx.body = {
      isLogin: true
    }
  } else {
    ctx.body = {
      isLogin: false
    }
  }
})
router.get('/', async(ctx) => {
  ctx.body = `
  <a href="/login">login</a>
  <a href="/isLogin">isLogin</a>
  `
})
app.listen(9999, () => {
  console.log(9999)
})