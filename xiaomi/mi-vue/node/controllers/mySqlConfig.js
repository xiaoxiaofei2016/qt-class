var mysql = require('mysql')
var config = require('./defaultConfig.js')

// 创建连接池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATEBASE,
  port: config.database.PORT
})

// 统一连接数据库的方法
let allServies = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放连接池
          })
        }
      })
    })
  }
}

// 读取所有login表数据，测试数据连接
let getAllUsers = function () {
  let _sql = `select * from login`
  return allServies.query(_sql)
}

// 注册用户
let insertUser = function (value) {
  let _sql = `insert into login set phone=?,mail=?,nickname=?,password=?`
  return allServies.query(_sql, value)
}

// 查找用户
let findUser = function (phone, mail, nickname) {
  let _sql = `select * from login where phone="${phone}" or mail="${mail}" or nickname="${nickname}"`
  return allServies.query(_sql)
}

// 用户登录
let userLogin = function (message, password) {
  let _sql = `select * from login where (phone="${message}" or mail="${message}" or nickname="${message}") and password ="${password}"`
  return allServies.query(_sql)
}

//  所有商品
let findallgoods = function (num) {
  let _sql = `select * from cart order by rand() limit ${num};`
  return allServies.query(_sql)
}

// 根据购物车id查找商品表数据
let findcartgoods = function (id) {
  let _sql = `select * from cart where id="${id}";`
  return allServies.query(_sql)
}

// 查找某一件商品
let findcart = function (id) {
  let _sql = `select * from cartselected where id="${id}";`
  return allServies.query(_sql)
}
// 查找购物车所有商品
let findallcart = function () {
  let _sql = `select * from cartselected;`
  return allServies.query(_sql)
}
// 插入购物车(id, title)
let insertgoods = function (value) {
  let _sql = `insert into cartselected set id=?,title=?,price=?,recommend=?,img=?,num=?,checked=?`
  return allServies.query(_sql, value)
}
// 根据删除购物车某一件商品
let deletegoods = function (value) {
  let _sql = `delete from cartselected where id=?`
  return allServies.query(_sql, value)
}

// 购物车数量增加
let addcartnum = function (id) {
  let _sql = `update cartselected set num=num+1 where id="${id}"`
  return allServies.query(_sql)
}
// 购物车数量减少
let reducecartnum = function (id) {
  let _sql = `update cartselected set num=num-1 where id="${id}" and num >= 2`
  return allServies.query(_sql)
}
// 设置全不选
let allfalse = function () {
  let _sql = `update cartselected set checked=0`
  return allServies.query(_sql)
}
// 设置全选
let alltrue = function () {
  let _sql = `update cartselected set checked=1`
  return allServies.query(_sql)
}
// 根据id切换该商品选中还是不选中
let singleselect = function (id) {
  let _sql = `update cartselected set checked=(case when checked=0 then 1 else checked=0 end) where id="${id}"`
  return allServies.query(_sql)
}

module.exports = {
  getAllUsers,
  insertUser,
  findUser,
  userLogin,
  findallgoods,
  findcart,
  findcartgoods,
  insertgoods,
  deletegoods,
  findallcart,
  addcartnum,
  reducecartnum,
  alltrue,
  allfalse,
  singleselect
}
