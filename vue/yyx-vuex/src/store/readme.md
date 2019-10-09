- 先看页面 再看vuex
  focus 数据流设计
- modules
  宏观设计一个项目
  模块 对应于vuex中的一个数据单元
  设计 四大家族构成
  Store 单一状态树
  export default new Vuex.Store({
    小型项目不要用vuex，因为vuex很复杂，
    就用组件传值 props + emit
    大型项目呢？ vuex + modules
  })

  this.$store.products.items
  this.$store.cart.items
  namespace: true
