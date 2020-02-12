import * as types from '../type.js'
const state = {
  isShowMask: false
}

const actions = {
  setShowMask ({commit}, status) {
    commit(types.SHOW_MASk, status)
  }
}

const mutations = {
  [types.SHOW_MASk] (state, status) {
    state.isShowMask = status
  }
}

const getters = {
  isShowMask: state => state.isShowMask
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
