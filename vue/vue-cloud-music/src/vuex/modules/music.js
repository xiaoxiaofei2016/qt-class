import * as types from '../types'
import { findIndex } from '@/common/util'

const state = {
  playList: [],
  currentIndex: -1, // 当前播放的歌
  playing: false,
  currentSong: ''
}

const mutations = {
  [types.SET_PLAY_LIST] (state, playList) {
    state.playList = playList
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING] (state, status) {
    state.playing = status
  }
}

const actions = {
  selectPlaySong ({commit, state}, song) {
    let playList = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表是否有待插入的歌曲并返回其索引
    let fpIndex = findIndex(playList, song)
    // 如果已经包含这首歌
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playList = [...playList, song] // playList.push(song)
      currentIndex = playList.length - 1 // 优先播放最后一首
    }

    commit(types.SET_PLAY_LIST, playList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_PLAYING, true)
  },
  addPlayList ({commit, state}, song) { // 加入播放列表
    let playlist = [...state.playList.slice(), song]
    if (playlist.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)
      commit(types.SET_PLAYING, true)
    }
    commit(types.SET_PLAY_LIST, playlist)
  }
}

const getters = {
  playList: state => state.playList,
  playing: state => state.playing
}

export default {
  state,
  mutations,
  actions,
  getters
}
