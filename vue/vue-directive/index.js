
// <div v-debounce="open">立即购买</div>

function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}

// Vue.directive('debounce', )
let option = {
  inserted: (el, binding) => {
    console.log(el, binding)
  },
  bind: function(el, binding) {
    // onclick addEventListener
    el.addEventListener('click', debounce(binding.value, 2000))
    // el.addEventListener('click', () => {
    //   el.style = "color" + binding.value
    // })
  },
  unbind: function() {

  },
}

let plugin = {}
plugin.install = function(argVue) {
  argVue.directive('debounce', option)
}
if (typeof exports === 'object') {
  module.exports = plugin
} else if (window) {
  window.Vue.use
}