//代理 浏览器代理
var proxy = new Proxy({}, {
  get: function(obj, prop) {
    console.log('设置get操作');
    return obj[prop];
  },
  set: function(obj, prop, value) {
    console.log('设置set操作');
    obj[prop] = value;
  }
})
proxy.time = 35;
console.log(proxy.time)