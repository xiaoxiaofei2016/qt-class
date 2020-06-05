// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.mixin({
  data() {
    console.log(`${this.$options.name}: data (from Mixin)`)
    //3 Root1: data (from Mixin)
    //6 App1: data (from Mixin)
    return {
      name: 'Mixin2'
    }
  },
  beforeCreate() {
    console.log(`${this.name}: beforeCreate (from Mixin)`)
    //1 undefined: beforeCreate (from Mixin)
    //4 undefined: beforeCreate (from Mixin)
  },
  beforeMount() {
    console.log(`${this.name}: beforeMount (from Mixin)`)
    // App2: beforeMount (from Mixin)
    // Root2: beforeMount (from Mixin)
  },
  mounted() {
    console.log(`${this.name}: mounted (from ${this.from()})`)
    // 7 App2: mounted (from App3)
    // 9 Root2: mounted (from Root3)
  },
  methods: {
    from() {
      return 'Mixin3'
    }
  }
})
// data 组件的先于mixin  生命周期 mixin的先于组件 
// 父子组件生命周期过程:beforeCreate(父) -> created(父) -> beforeMount(父) -> beforeCreate(子) -> created(子) -> beforeMount(子) -> mounted(子) -> mounted(父)
// data和生命周期的顺序  data在beforeCreate之后，created之前
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  name: 'Root1',
  data() {
    console.log('Root: data (from Root)') // 2
    return {
      name: 'Root2'
    }
  },
  beforeCreate() {
    console.log('Root: beforeCreate (from Root)')
  },
  created() {
    console.log('Root: created (from Root)')
  },
  beforeMount() {
    console.log('Root: beforeMount (from Root)') // 1-2
  },
  mounted() {
    console.log('Root: mounted (from Root)') // 10
  },
  methods: {
    from() {
      return 'Root3'
    }
  },
  render: h => h(App)
}).$mount('#app')
