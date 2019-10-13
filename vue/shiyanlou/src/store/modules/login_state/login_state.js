const state = {
  sing_on: false, // 未登录状态
  user_info: { // 用户信息
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    username: '美团'
  },
  show_login_dialog: false,
  on_or_up: 'up'
}

const actions = {
  change_show_state(context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  }
}

const mutations = {
  change_show_state (state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}