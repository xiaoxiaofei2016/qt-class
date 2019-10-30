const userService = require('../controllers/mySqlConfig.js')
const router = require('koa-router')()

router.prefix('/users') // 前缀

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

// 注册
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname
  if (!_username || !_userpwd || !_nickname) {
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
        ctx.body = {
          code: '800003',
          data: 'err',
          mess: '用户名已存在'
        }
      } else {
        await userService.insertUser([user.username, user.userpwd, user.nickname]).then((res) => {
          let r = ''
          if (res.affectedRows != 0) {
            r = 'ok'
            ctx.body = {
              code: '800000',
              data: r,
              mess: '注册成功'
            }
          } else {
            r = 'error'
            ctx.body = {
              code: '800004',
              data: r,
              mess: '注册失败'
            }
          }
        })
      }
    })
  }
})

// 登录
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd

  await userService.userLogin(_username, _userpwd).then((res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '800000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})

// 根据分类名称查找对应的笔记列表
router.post('/findNoteListByType', async (ctx, next) => {
  let note_type = ctx.request.body.note_type
  await userService.findNoteListByType(note_type).then((res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '800000',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        data: r,
        mess: '列表为空'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})

// 根据笔记列表的id查找笔记的详情
router.post('/findNoteListById', async (ctx, next) => {
  let id = ctx.request.body.id
  await userService.findNoteListById(id).then((res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '800000',
        data: res[0],
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        mess: '没有更多了哦'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})

// 新增笔记
router.post('/insertNote', async (ctx, next) => {
  let _noteContent = ctx.request.body.note_content
  let _headImg = ctx.request.body.head_img
  let _title = ctx.request.body.title
  let _noteType = ctx.request.body.note_type
  let _userId = ctx.request.body.userId
  let _nickname = ctx.request.body.nickname
  let user = {
    note_content: _noteContent,
    head_img: _headImg,
    title: _title,
    note_type: _noteType,
    userId: _userId,
    nickname: _nickname
  }
  await userService.insertNote([user.userId, user.title, user.note_type, user.note_content, user.head_img, user.nickname]).then((res) => {
    console.log(res)
    let r = ''
    if (res.affectedRows != 0) {
      r = 'ok'
      ctx.body = {
        code: '800000',
        data: r,
        mess: '添加笔记成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        data: r,
        mess: '添加笔记失败'
      }
    }
  })
})

module.exports = router
