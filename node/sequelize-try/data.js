const Sequelize = require('sequelize');
const sequelize = new Sequelize('learn_sequelize', 'root', '163004', {
  host: '127.0.0.1',
  dialect: 'mysql'
})

// shops表的映射 ORM
const Shop = sequelize.define('shops', { // 第一个参数为操作的对象,第三个为对数据库的操作
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  thumb_url: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
  address: Sequelize.STRING
}, {
  tableName: 'shops',
  timestamps: false
})
async function SearchShopById (id) {
  // shop 数据表的映射对象
  return Shop.findByPk(id)
}
async function CreateShops (shop) {
  return Shop.create(shop)
}

module.exports = {
  SearchShopById,
  CreateShops
}
