import * as types from '../type.js'

const state = {
  isShowAllGoods: false,
  isShowLeftNavs: true
}

const actions = {
  setShowAllGoods ({commit}, status) {
    commit(types.SHOW_ALL_GOODS, status)
  },
  setShowLeftNavs ({commit}, status) {
    commit(types.SHOW_LEFT_NAVS, status)
  }
}

const mutations = {
  [types.SHOW_ALL_GOODS] (state, status) {
    state.isShowAllGoods = status
  },
  [types.SHOW_LEFT_NAVS] (state, status) {
    state.isShowLeftNavs = status
  }
}

const getters = {
  isShowAllGoods: state => state.isShowAllGoods,
  isShowLeftNavs: state => state.isShowLeftNavs
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
