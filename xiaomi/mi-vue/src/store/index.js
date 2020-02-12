import Vue from 'vue'
import Vuex from 'vuex'
import video from './modules/video'
import allGoods from './modules/allGoods'
import registerLogin from './modules/register-login'
import mask from './modules/mask'
import login from './modules/login'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    video,
    allGoods,
    registerLogin,
    mask,
    login,
    cart
  }
})
