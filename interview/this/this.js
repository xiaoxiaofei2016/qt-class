var a = {
  name: 'a',
 say: function () {
    console.log(this.name)
 }
} 
var b = a.say
b() // this指向window undefind




function fn() {
  console.log(this.length)
}
// fn() // window.length为页面iframe的个数

var obj = {
  length: 5
}
var m = function() {
  console.log(this == obj) // true
  fn() // window.fn()
  console.log(arguments)
  arguments[0]() // 类数组对象 [Arguments] { '0': [Function: fn], '1': 2, '2': 3 }
}
var res = m.bind(obj)
res(fn, 2, 3)

// 优先级：new > apply/bind>call
