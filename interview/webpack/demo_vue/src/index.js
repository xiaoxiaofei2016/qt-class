import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false
const __import__ = file => () => import(`./pages/${file}.vue`)
Vue.use(Router)

// vue-router3.1之后$router.push不加回调会报错，此方法为禁止全局路由错误处理打印
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      component: import('./App.vue')
    },
    {
      path: '/one',
      component: __import__('one')
    },
    {
      path: '/two',
      component: __import__('two')
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})