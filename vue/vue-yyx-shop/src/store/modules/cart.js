const state = {
  items: [
    // {
    //   "id": 1,
    //   "quantity": 1
    // }
  ], // 购物列表
  checkoutStatus: null // 状态
}
// 总价
const getters = {
  cartProducts: (state, getters, rootState) => { // 用另一个仓库的state数据
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id == id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => { // 用getters的另一个方法cartProducts()
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  addProductToCart({state, commit}, product) {
    // 只可以读state
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id == product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id }) 
      } else {
        commit('increnebtItemQuantity', cartItem)
      }

    }
  }
}

const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  increnebtItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id == id)
    cartItem.quantity++
  },
  setCheckoutStatus () {}
}

export default {
  namespaced:true,
  state,
  actions,
  getters,
  mutations
}