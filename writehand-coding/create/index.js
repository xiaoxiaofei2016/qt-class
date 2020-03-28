var a = {
  name: 'wn',
  age: 18
}

var b = Object.create(a)
var c = a
console.log(b.__proto__, c.__proto__) 


// function mycreate(obj) {
//   function F() {}
//   F.prototype = obj
//   return new F()
// }

Object.myCreate = function (obj, properties)  {
  // 需要注意的是新添加的属性properties是新对象自身具有的属性也就是通过hasOwnProperty() 方法可以获取到的属性，而不是添加在原型对象里。
  var F = function ()  {}
  F.prototype = obj
  if (properties) {
     Object.defineProperties(F, properties)
  }
  return new F()
}

Object.myCreate({}, {a: {value: 1}})     // {a: 1}



if (typeof Object.create != 'function') {
  Object.create = function (prototype, properties) {
    function Ctor() {}
    Ctor.prototype = prototype
    var o = new Ctor()
    if (prototype) { o.constructor = Ctor }
    if (properties != undefined) {
      if (properties != Object(properties)) {
        throw new Error()
      }
      Object.defineProperties(o, properties)
    }
    return o
  }
}