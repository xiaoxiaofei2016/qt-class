let proto = {}

function defineGetter(prop, name) { // 参数分别是代理的对象和对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象都有一个__defineGtter__方法，用这个方法来实现代理
    return this[prop][name] // this ===> ctx 所以ctx.url得到的就是this.request.url
  })
}

function defineSetter (prop, name) {
  proto.__defineSetter__(name, function(val) {
    this[prop][name] = val // 
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

defineSetter('response', 'body')
defineGetter('response', 'body') // ctx.body代理response的body方法

module.exports = proto