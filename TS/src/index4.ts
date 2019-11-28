// 装饰器 (decorator)
// class Person {
//   say () {
//     console.log('hello')
//   }
// }

// function Person1() {}
// Object.defineProperty(Person1.prototype, 'say', {
//   value: function() { console.log('hello') },
//   enumerable: false,
//   configurable: false,
//   writable: true
// })

// 类装饰器
function addAge(constructor: Function) {
  constructor.prototype.age1 = 19
}

@addAge
class Person {
  name: string
  age1?: number
  constructor () {
    this.name = 'wn'
  }
}

let person2 = new Person()
console.log(person2.age1)

// Person = addAge(function Person() {...})

// 属性/方法 装饰器
// 声明装饰器修饰方法 属性
function method(target: any, prototypeKey: string, descriptor: PropertyDescriptor) {
  console.log(target)
  console.log('prop' + prototypeKey)
  console.log('desc' + JSON.stringify(descriptor) + '\n\n')
  descriptor.writable = true
}

class Person3 {
  name: string
  constructor () {
    this.name = 'wn'
  }

  @method
  say () {
    return 'instance method'
  }

  @method
  static run() {
    return 'static method'
  }
}
const abc = new Person3()
abc.say = function() {
  return 'edit'
}
console.log(abc.say())

// 参数装饰器
function logParameter (target: Object, prototypeKey: string, index: number) {
  console.log(target, prototypeKey, index)
}

class Person4 {
  greet(message: string, @logParameter name: string): string {
    return `${message} ${name}`
  }
}
const p = new Person4()
console.log(p.greet('hello', 'wn'))