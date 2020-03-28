// hash路由
class Route {
  constructor() {
    // 路由存储对象
    this.routes = {}
    // 当前的hash
    this.currentHash = ''

    this.freshRoute = this.freshRoute.bind(this)

    // 监听
    window.addEventListener('load', this.freshRoute, false) // 默认false冒泡
    window.addEventListener('hashchange', this.freshRoute, false)
  }

  // 存储
  storeRoute (path, cb) {
    this.routes[path] = cb || function () {}
  }

  // 更新
  freshRoute () {
    this.currentHash = location.hash.slice(1) || '/'
    this.routes[this.currentHash]()
  }
}