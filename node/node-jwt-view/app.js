// nuxt:vue ssr
// next:react ssr
// nest:node 基于express
const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaView = require('koa-views')
const path = require('path')
const router = KoaRouter()
const bodyParser = require('koa-bodyparser')
const jwt = require('jsonwebtoken')

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

router.get('/401', async (ctx) => {
  await ctx.render('401')
})

router.get('/userCenter', async (ctx) => {
  await ctx.render('userInfo')
})

router.get('/userInfo', async (ctx, next) => {
  // 同步验证
	const auth = ctx.request.headers['authorization'];
  const token = auth.split(' ')[1];
  try {
		//解码取出之前存在payload的user_id 和 name
    const payload = jwt.verify(token, 'secret');
    console.log('payload———', payload);
		ctx.user_id = payload.id;
		await next()
	} catch (err) {
    ctx.body = {
      code: 300
    }
	}
}, async (ctx) => {
  ctx.body = {
    code: 200,
    name: 123,
    id: 1
  }
})

router.post('/login', async (ctx) => {// 处理业务
  const data = ctx.request.body
  console.log(data)
  if (data.userName === '123' && data.pwd === '456') {
    // 生成token
    // 保持 用户登录状态 每次请求 都传uid { uid: 000 }
    // jwt 解决了 传递数据 加密的功能
    // 加密的算法 payload(数据，时间) 签名
    const token = jwt.sign({uid: 000}, 'secret', {
      expiresIn: 60
    })
    ctx.body = {
      code: 200,
      token: token
    }
  } else {
    ctx.body = {
      code: 400
    }
  }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('Server is running 3000')
})