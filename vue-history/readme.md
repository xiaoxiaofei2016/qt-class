- 链接带来了页面的互联
    一切皆资源 链接表示 URL
    传统页面 重新刷新 坏事   体验有点差
    SPA Single Page Application

## 路由的做法 vue-router 
- 单页应用的结构
    不再是n个页面了，1个页面，分为不动的部分和动的部分
    导航 nav a #/page1
    #/page1 path 页面切换的  锚链接
    URL 改变了的事件，container 元素里 DOM
    大型页面，方便跳转
    锚链接让点击链接，不跳转页面成为可能  #/page1 #开头

    路由接管一切 new HashRouter()
    constructor 订阅hashchange事件

- 新的前端世界在打开  要有新的秩序
  管住所有路由  #/page
  hash => cb() //container
  class HashRouter
  this.routers = {}
  向外提供一个  register(hash, callback = function() {}) 方法
  load
  window.addEventListener('hashchange', this.load.bind(this))
  call, apply es5 手动指定函数内部this的API
  bind this 一样 返回一个新的函数, 适合事件监听时候用


VUE React SPA Single Page Application 应用体验更好，页面会白一点
传统的网页 链接把网站组织起来 重新加载一个新的页面，新的http请求
/about  req, res 过程
req /about
时间 网路传输时间 01二进制， 电频信号  光速 + node/java/python后端代码，查询数据库执行的时间，把HTML返回回去 = 白屏时间
1.5s 用户就会离开， 0.1s 1000W
res /about about.html
路由是独立的
- 网站MVC  => 应用(Vue App)体验产生路由   解决了白屏问题
VueRouter 来了
- hashRouter
  #/shop  #/
  优点是ie8以上都支持
  缺点是： 路由不纯粹，
  HistoryRouter history历史的 /shop  访问历史
  VUERouter 两种实现方式 = hashRouter（兼容性）+ historyRouter（长得好，移动端兼容性还是没有问题）

