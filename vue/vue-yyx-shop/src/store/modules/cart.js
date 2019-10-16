const state = {
  items: [], // 购物列表
  checkoutStatus: null // 状态
}
// 总价
const getters = {
  cartProducts: () => {
    
  },
  cartTotalPrice: (state) => {
    // return state.items.reduce()
  }
}


export default {
  namespaced:true,
}