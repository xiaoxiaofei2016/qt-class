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
- class get 方法
  Store是一个类，四大家族是它的属性
  this.$store 对vue.prototype扩展后，所有的组件都可以调用
  Vue 钩子函数， beforeCreate
  除了他该做的，再做下vuex的初始化
  Vue.mixin({
    beforeCreate: 
  })
- 让唯一的store对象，state是属性
  beforeCeate vue 该怎样，再this.$store
  this就是Vue单例 根组件
  beforeCeate 之前的代码也要运行， Vue.mixin({
    beforeCeate: vueInit
  })
  通过源码认识到所有组件都可以访问$store,是因为他已经为vue单例加入了这个属性
  每个组件里的this-> 本组件-> prototype-> vue单例

- this.$store.getters.xxx
跟state不一样的地方 是方法 会返回根据state的新的值
Object.defineProperty(this.$store.getters, xxx, {
  get () {
    数据劫持
    return store.options.getters[xxxx]
    return getterFn(store.state)
  }
})

defineProperty 是一个个属性定义[key, val]
forEachVal()
regiterGetter(this, key, fn)