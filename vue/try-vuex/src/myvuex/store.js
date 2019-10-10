// 实例是否是 this.state
export class Store {
  constructor(options) {
    console.log(options)
    // 让this.$store 找到 .state
    this.options = options
    // this.state = this.options.state
    Vue.mixin({ // 扩展vue
      beforeCreate: vuexInit
    }) 
  }
  // this.$store.state.count
  // 在获取的同时还可以做其他的事情
  get state() {
    return this.options.state
  }
}
// this.$store
function vuexInit() {
  console.log('实例化之前')
}

export function install() {

}