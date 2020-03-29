var router = require('koa-router')()
const userService = require('../controllers/mySqlConfig.js')
const jwt = require('jsonwebtoken') // jwt生成token
const crypto = require('crypto')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// 所有用户信息
router.get('/all', async (ctx, next) => {
  await userService.getAllUsers().then((res) => {
    console.log('打印结果:' + JSON.stringify(res))
    ctx.body = res
  })
})
// 所有商品
router.post('/allcart', async (ctx, next) => {
  let _num = ctx.request.body.num
  await userService.findallgoods(_num).then((res) => {
    ctx.body = {
      data: res
    }
  })
})
// 购物车所有商品
router.post('/allcarts', async (ctx, next) => {
  let _userId = ctx.request.body.userId
  await userService.findallcart(_userId).then((res) => {
    // console.log('打印结果:' + JSON.stringify(res))
    ctx.body = {
      data: res
    }
  })
})

// 用户注册
router.post('/userRegister', async (ctx, next) => {
  let md5 = crypto.createHash('md5')
  let _phone = ctx.request.body.phone
  let _mail = ctx.request.body.mail
  let _nickname = ctx.request.body.nickname
  let _password = ctx.request.body.password
  let newPas = md5.update(_password).digest('hex')
  if (!_phone) {
    ctx.body = {
      code: '800001',
      mess: '用户手机号不能为空'
    }
    return
  } else {
    let user = {
      phone: _phone,
      mail: _mail,
      nickname: _nickname,
      password: newPas
    }
    await userService.findUser(user.phone, user.mail, user.nickname).then(async (res) => {
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
        await userService.insertUser([user.phone, user.mail, user.nickname, user.password]).then((res) => {
          let r = ''
          if (res.affectedRows !== 0) {
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

// 用户登录
router.post('/userLogin', async (ctx, next) => {
  let md5 = crypto.createHash('md5')
  let _message = ctx.request.body.message
  let _password = ctx.request.body.password
  let newPas = md5.update(_password).digest('hex')
  await userService.userLogin(_message, newPas).then((res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      let userInfo = {
        userId : res[0].userId,
        nickname: res[0].nickname,
        phone: res[0].phone,
        mail: res[0].mail,
        password: res[0].password,
        avatar: res[0].avatar
      }
      let payload = {
        nickname: userInfo.nickname,
        admin: true
      }
      let secret = 'MISHOP'
      let token = jwt.sign(payload, secret, {expiresIn: 60 * 60 * 2})
      ctx.body = {
        code: '800000',
        data: userInfo,
        token: token,
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

// 加入购物车
router.post('/insertcart', async (ctx, next) => {
  let _id = ctx.request.body.id
  let _title = ctx.request.body.title
  let _price = ctx.request.body.price
  let _recommend = ctx.request.body.recommend
  let _img = ctx.request.body.img
  let _num = ctx.request.body.num
  let _checked = ctx.request.body.checked
  let _userId = ctx.request.body.userId
  if (!_id) {
    return
  } else {
    let cart = {
      id: _id,
      title: _title,
      price: _price,
      recommend: _recommend,
      img: _img,
      num: _num,
      checked: _checked,
      userId: _userId
    }
    await userService.findcart(cart.id, cart.userId).then(async (res) => {
      if (res.length) {
        try {
          throw Error('购物车中已存在')
        } catch (error) {
          console.log(error)
        }
        ctx.body = {
          code: '800003',
          data: 'err',
          mess: '购物车已存在该商品'
        }
      } else {
        await userService.insertgoods([cart.id, cart.title, cart.price, cart.recommend, cart.img, cart.num, cart.checked, cart.userId]).then(async (res) => {
          let r = ''
          if (res.affectedRows !== 0) {
            await userService.findcartgoods(cart.id).then((res1) => {
              ctx.body = {
                code: '800000',
                data: res1,
                mess: '增加购物车成功'
              }
            })
          } else {
            r = 'error'
            ctx.body = {
              code: '800004',
              data: r,
              mess: '增加购物车失败'
            }
          }
        })
      }
    })
  }
})

// 删除商品
router.post('/deletegood', async (ctx, next) => {
  let _id = ctx.request.body.id
  let _userId = ctx.request.body.userId
  await userService.deletegoods(_id, _userId).then(res => {
    ctx.body = {
      code: '800000',
      data: res,
      mess: '删除成功'
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})


// 增加购物车某个商品数量
router.post('/addcartnum', async (ctx, next) => {
  let _id = ctx.request.body.id
  let _userId = ctx.request.body.userId
  await userService.addcartnum(_id, _userId).then(res => {
    ctx.body = {
      code: '800000',
      data: res,
      mess: '增加了商品数量'
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})
// 减少购物车某个商品数量
router.post('/reducecartnum', async (ctx, next) => {
  let _id = ctx.request.body.id
  let _userId = ctx.request.body.userId
  await userService.reducecartnum(_id, _userId).then(res => {
    ctx.body = {
      code: '800000',
      data: res,
      mess: '减少了商品数量'
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})
// 设置全选
router.post('/alltrue', async (ctx, next) => {
  let _userId = ctx.request.body.userId
  await userService.alltrue(_userId).then(res => {
    ctx.body = {
      code: '800000',
      data: res
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})
// 设置全不选
router.post('/allfalse', async (ctx, next) => {
  let _userId = ctx.request.body.userId
  await userService.allfalse(_userId).then(res => {
    ctx.body = {
      code: '800000',
      data: res
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})
// 根据id切换该商品选中还是不选中
router.post('/singleselect', async (ctx, next) => {
  let _id = ctx.request.body.id
  let _userId = ctx.request.body.userId
  await userService.singleselect(_id, _userId).then(res => {
    ctx.body = {
      code: '800000',
      data: res
    }
  }).catch(err => {
    ctx.body = {
      code: '800002',
      data: err
    }
  })
})

// 订单
router.post('/orders', async (ctx, next) => {
  let _userId = ctx.request.body.userId
  await userService.orders(_userId).then(async res => {
    console.log(res)
    if (res.affectedRows !== 0) {
      await userService.order(_userId).then(data => {
        ctx.body = {
          code: '800000',
          data: data
        }
      })
    }
  })
})


module.exports = router
