const { mysql } = require('../../mysql')

// 商品详情页数据
async function detailAction(ctx) {
  const goodsId = ctx.query.id
  const openId = ctx.query.openId
  // 商品信息
  const info = await mysql('nideshop_goods').where({
    'id': goodsId
  }).select()
  // 获取商品的图片
  const gallery = await mysql('nideshop_goods_gallery').where({
    'goods_id': goodsId
  })
  // 商品参数 
  // 关联查询两张表leftJoin
  const attribute = await mysql('nideshop_goods_attribute').column('nideshop_goods_attribute.value', 'nideshop_attribute.name').leftJoin('nideshop_attribute', 'nideshop_goods_attribute.attribute_id', 'nideshop_attribute.id').where({
    'nideshop_goods_attribute.goods_id': goodsId
  }).select()

  // 常见问题
  const issue = await mysql('nideshop_goods_issue').select()

  // 大家都在看
  const productList = await mysql('nideshop_goods').where({
    'category_id': info[0].category_id
  }).select()

  // 判断是否收藏过
  const iscollect = await mysql('nideshop_collect').where({
    'user_id': openId,
    'value_id': goodsId
  }).select()
  let collected = false
  if (iscollect.length > 0) {
    collected = true
  }

  // 判断该用户的购物车里是否含有此商品
  const oldNumber = await mysql('nideshop_cart').where({
    'user_id': openId
  }).column('number').select()
  let allnumber = 0
  if (oldNumber.length > 0) {
    for (let i = 0; i < oldNumber.length; i++) {
      const element = oldNumber[i] // {number: 1}
      allnumber += element.number
    }
  }

  ctx.body = {
    'info': info[0] || [],
    'gallery': gallery,
    'attribute': attribute,
    'issue': issue,
    'productList': productList,
    'collected': collected,
    'allnumber': allnumber
  }
}

module.exports = {
  detailAction
}