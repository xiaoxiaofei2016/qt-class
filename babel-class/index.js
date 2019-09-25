class Person {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    return 'Hello, I am' + this.name
  }
}

var wn = new Person('蜗牛')
console.log(wn.sayHello())
console.log(Object.keys(Person.prototype)) // 不能被枚举

// ES5
// function Person(name) {
//   this.name = name
// }
// Person.prototype.sayHello = function() {
//   return 'Hello, I am' + this.name
// }
// console.log(Object.keys(Person.prototype))