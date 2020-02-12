import * as types from '../type.js'
const state = {
  isShowAgreement: false
}

const actions = {
  setShowAgreement ({commit}, status) {
    commit(types.SHOW_AGREENMENT, status)
  }
}

const mutations = {
  [types.SHOW_AGREENMENT] (state, status) {
    state.isShowAgreement = status
  }
}

const getters = {
  isShowAgreement: state => state.isShowAgreement
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
