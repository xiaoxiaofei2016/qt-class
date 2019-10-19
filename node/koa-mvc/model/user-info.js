const { query } = require('../util/index.js')
// 注册
const insertData = function(val) {
  console.log(val);
  // 数据库 mysql 
  let sql = "insert into user_info(name, password) value (?, ?)";
  return query(sql, val);
}
module.exports = {
  insertData
}
