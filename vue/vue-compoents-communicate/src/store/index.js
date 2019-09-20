import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.9.20',
  money: 100
}

const mutations = { // 同步
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money += 1
  }
}

const actions = { //异步
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney') // 使用action提交makeMoney方法，异步
    },2000)
    console.log('挣钱')
  }
}

const getters = { // vuex计算属性
  count: function(state) {
    return state.count += 100
  }
}

export default new Vuex.Store({ // 抛出方法和数据
  state,
  mutations,
  getters,
  actions
})