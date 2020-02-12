import * as types from '../type.js'
const state = {
  isShowVideo: false,
  id: 1
}

const actions = {
  setShowVideo ({commit}, status) {
    commit(types.SHOW_VIDEO, status)
  },
  setId ({commit}, status) {
    commit('setVideoId', status)
  }
}

const mutations = {
  [types.SHOW_VIDEO] (state, status) {
    state.isShowVideo = status
  },
  setVideoId (state, status) {
    state.id = status
  }
}

const getters = {
  isShowVideo: state => state.isShowVideo,
  id: state => state.id
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
