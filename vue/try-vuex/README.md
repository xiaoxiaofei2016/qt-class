- vuex 数据流
组件 + 共享数据
1. 共享状态
- this.$store
Vue.use(Vuex) Vue.$store
- this.$store.state
  new Vue({
    store
  })
  store = new Vuex.Store({
    state,
    ...
  })

  myVuex Vue.use(myVuex)
  new myVuex.Store(options)
  options 包含四大家族

- es6的模块化机制
  export default xxx
  index.js Vuex { Store }