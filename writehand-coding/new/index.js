function Foo(e) {
    this.name = 'wn'
    this.age = e
    // return {}
}

function objectFactory() {
    var obj = {}
    var Constructor = [].shift.call(arguments)//取出arguments的第一项
    // var [Constructor,...args] = [...arguments]
    obj.__proto__ = Constructor.prototype//原型连接
    var ret = Constructor.apply(obj,arguments)//继承Constructor属性
    return typeof ret === 'object' ? ret : obj
}
console.log(new Foo(18))
console.log(objectFactory(Foo,18))