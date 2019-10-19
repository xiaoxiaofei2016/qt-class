const mysql = require('mysql');

const pool = mysql.createPool({ // createPool创建 Mysql 连接 ,它一次性的创建了多个连接
  user: 'root',
  password: '163004',
  host: '127.0.0.1',
  port: 3306,
  database: 'chat'
})

// 封装
let query = function(sql, value) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connet) => {
      if (err) reject(err);
      connet.query(sql, value,(err, rows) => {
        if (err) reject(err);
        resolve(rows);
        connet.release(); //释放连接资源 | 跟 connection.destroy() 不同，它是销毁
      })
    })
  })
}
module.exports = {
  query
}