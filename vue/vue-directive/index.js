
// <div v-debounce="open">立即购买</div>
Vue.directive('debounce', {
  inserted: (el, binding) => {
    console.log(el, binding)
  }
})