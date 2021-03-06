// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './style/css/reset.styl' // 清楚默认样式
import './style/css/font.styl' // iconfont图标字体
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播
import VueVideoPlayer from 'vue-video-player' // 播放video
import 'video.js/dist/video-js.css'
import './style/css/video.styl' // 自定义video的样式，可以覆盖video.js.css相同类名的样式

Vue.use(Vuex).use(VueAwesomeSwiper).use(VueVideoPlayer)

Vue.prototype.$http = axios

Vue.config.productionTip = false
// console.log(store.state.login.isLogin)
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    if (localStorage.getItem('Authorization')) {
      next()
    } else {
      // console.log(to.fullPath)
      next({
        path: '/Login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
