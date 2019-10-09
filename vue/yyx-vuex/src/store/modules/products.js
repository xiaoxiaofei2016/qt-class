import shop from '../../api/shop'

const state = {
  all: [
    // {
    //   id: 1,
    //   title: 'iphone11',
    //   price: 9999
    // }
  ]
}

const getters = {}

const actions = {
  // vuex 给actions的 commit mutations => state
  getAllProducts ({ commit }) {
    // api
    shop.getProducts((products) => {
      console.log('前端到api，callback回来了', products);
      commit('setProducts', products)
    })
    // mutations

  }
}

const mutations = { // 只有mutations可以改state
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
