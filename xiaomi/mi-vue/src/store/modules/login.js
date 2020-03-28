import * as types from '../type.js'

const state = {
  isLogin: false,
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '' 
}

const actions = {
  setIsLogin ({commit}, status) {
    commit(types.ISLOGIN, status)
  },
}

const mutations = {
  [types.ISLOGIN] (state, status) {
    state.isLogin = status
  },
  changeLogin(state, userToken) { // 将后端返回的token值存在vuex和本地中
    state.Authorization = userToken.Authorization
    localStorage.setItem('Authorization', userToken.Authorization)
  },
  loselogin(state) {
    if(localStorage.getItem('Authorization')) {
      localStorage.removeItem('Authorization')
      state.Authorization = ''
    }
  }
}

const getters = {
  isLogin: state => state.isLogin,
  loginStatus: (state) => {
    // console.log(state.Authorization ? true : false) // 正常
    return state.Authorization ? true : false  // 由本地token值存在与否判断登陆状态
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
