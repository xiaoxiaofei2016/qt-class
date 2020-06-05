## XMLHttpRequest
  XMLHttpRequest 是一个非常粗糙的API，配置和调用方式非常混乱，前端程序员们不仅要做各个浏览器的兼容性，还饱受回调地狱的折磨
  状态码:0 1 2 3 4
## ajax 
  1. 优点：对原生XHR的封装，做了兼容处理，简化了使用。
    增加了对JSONP的支持，可以简单处理部分跨域。
  2. 缺点：
  如果有多个请求，并且有依赖关系的话，容易形成回调地狱。
  本身是针对MVC的编程，不符合现在前端MVVM的浪潮。
  ajax是jQuery中的一个方法。如果只是要使用ajax却要引入整个jQuery非常的不合理。
## fetch
  1. 优势：跨域的处理
  2. fetch目前遇到的问题：
      1. fetch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
      2. fetch默认不会带cookie，需要添加配置项。
      3. fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的 实现超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费。
      4. fetch没有办法原生监测请求的进度，而XHR可以。
## axios
  axios是通过promise实现对ajax技术的一种封装,ajax技术实现了网页的局部数据刷新,axios实现了对ajax的封装。