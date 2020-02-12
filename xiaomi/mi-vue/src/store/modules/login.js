import * as types from '../type.js'

const state = {
  isLogin: false
}

const actions = {
  setIsLogin ({commit}, status) {
    commit(types.ISLOGIN, status)
  }
}

const mutations = {
  [types.ISLOGIN] (state, status) {
    state.isLogin = status
  }
}

const getters = {
  isLogin: state => state.isLogin
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
