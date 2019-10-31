import Vue from 'vue'
import { add, sub } from './util'
import App from './App'
console.log(add(1, 2))

new Vue({
  render: h => h(App),
  components: { App }
}).$mount('#app')