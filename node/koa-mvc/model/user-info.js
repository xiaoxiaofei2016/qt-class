const md5 = require('md5');
const { query } = require('../util/index.js')
// 注册
const insertData = function(val) {
  console.log(val);
  // 数据库 mysql 
  let sql = "insert into user_info(name, password) value (?, ?)";
  // 哈希
  // 输出固定的 不可能 同样的输入 同样的输出
  // zhaoeng17 -> 哈希算法 -> 123456
  // zhaoeng16 -> 哈希算法 -> 123452
  return query(sql, [val.name, md5(val.password)]);
}

const queryByName = function() {}

module.exports = {
  insertData
}
