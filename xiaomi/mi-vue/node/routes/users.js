var router = require('koa-router')()
const userService = require('../controllers/mySqlConfig.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

// 所有用户
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
  await userService.findallcart().then((res) => {
    // console.log('打印结果:' + JSON.stringify(res))
    ctx.body = {
      data: res
    }
  })
})

// 用户注册
router.post('/userRegister', async (ctx, next) => {
  let _phone = ctx.request.body.phone
  if (!_phone) {
    ctx.body = {
      code: '800001',
      mess: '用户手机号不能为空'
    }
    return
  } else {
    let user = {
      phone: _phone
    }
    await userService.findUser(user.phone).then(async (res) => {
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
        await userService.insertUser([user.phone]).then((res) => {
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
  let _phone = ctx.request.body.phone
  let _password = ctx.request.body.password

  await userService.userLogin(_phone, _password).then((res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        phone: res[0].phone,
        password: res[0].password
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

// 加入购物车
router.post('/insertcart', async (ctx, next) => {
  let _id = ctx.request.body.id
  let _title = ctx.request.body.title
  let _price = ctx.request.body.price
  let _recommend = ctx.request.body.recommend
  let _img = ctx.request.body.img
  let _num = ctx.request.body.num
  let _checked = ctx.request.body.checked
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
      checked: _checked
    }
    await userService.findcart(cart.id).then(async (res) => {
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
        await userService.insertgoods([cart.id, cart.title, cart.price, cart.recommend, cart.img, cart.num, cart.checked]).then(async (res) => {
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
  await userService.deletegoods(_id).then(res => {
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
  await userService.addcartnum(_id).then(res => {
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
  await userService.reducecartnum(_id).then(res => {
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
  await userService.alltrue().then(res => {
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
  await userService.allfalse().then(res => {
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
  await userService.singleselect(_id).then(res => {
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

module.exports = router
