import * as types from '../types'

const state = {
  playList: [],
  currentIndex: -1
}

const mutations = {
  [types.SET_PLAY_LIST] (state, playList) {
    state.playList = playList
  }
}

const actions = {
  selectPlaySong ({commit, state}, song) {
    let playList = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表是否有待插入的歌曲并返回其索引
    let fpIndex = findIndex(playList, song)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
