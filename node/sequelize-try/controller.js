const { SearchShopById, CreateShops } = require('./data');
module.exports = {
  findById: async (ctx) => {
    let id = ctx.params.id
    console.log(id) // id为路由api/shop/:id
    const shop = await SearchShopById(id)
    ctx.body = {
      status: 0,
      data: shop
    }
  },
  createShop: async (ctx) => {
    const shop = ctx.request.body
    console.log('shop', shop) // shop为sql语句
    await CreateShops(shop)
    ctx.body = {
      status: 0
    }
  }
}
