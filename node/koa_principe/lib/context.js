let proto = {}
function defineGetter(prop, name) { // 参数分别是代理的对象和对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象都有一个__defineGtter__方法，用这个方法来实现代理
    return this[prop][name] // this ===> ctx 所以ctx.url得到的就是this.request.url
  }) 
}

defineGetter('request', 'url')
defineGetter('request', 'path')


module.exports = proto