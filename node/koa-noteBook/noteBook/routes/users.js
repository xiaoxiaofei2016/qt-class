const userService = require('../controllers/mySqlConfig.js')
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async (ctx, next) => {
  await userService.getAllUsers().then((res) => {
    console.log('打印结果:' + JSON.stringify(res))
    ctx.body = res
  })
})

router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname
  if (!_username && !_userpwd && !_nickname) {
    ctx.body = {
      code: '800001',
      mess: '用户名昵称密码不能为空'
    }
    return
  } else {
    let user = {
      username: _username,
      userpwd: _userpwd,
      nickname: _nickname
    }
    await userService.findUser(user.username).then(async (res) => {
      if (res.length) {
        try {
          throw Error('用户名已存在')
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
})

module.exports = router
