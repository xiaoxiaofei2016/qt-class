## 封装
  1. 类中有一些私有变量和私有方法，外界就访问不到，共有方法可以通过this创建的属性看作是对象共有属性和对象共有方法，不止如此，你还可以通过共有方法访问到类或对象的私有属性和私有方法
  function Person(name, age, sex) {
    this.name = name; // 共有方法
    var age = age; // 私有方法
    var sex = sex; // 私有方法
    this.show = function () { // 共有方法
      console.log(age, sex)
    }
  }
  var person = new Person('Sunshine', 18, '女)
  person.age // undefined
  person.name // Sunshine
  person.show() // 18, 女
  2. 闭包实现的继承
    闭包是有权访问另外一个函数作用域中变量的函数，即在一个函数内部创建另外一个函数。这时就可以将闭包作为创建对象的构造函数，这样它既是闭包又是可实例对象的函数。
## 继承
  1. 原型继承
    Cat.prototype = new Animal()
    特点：基于原型链，既是父类的实例，也是子类的实例
    缺点：无法实现多继承
  2. 构造继承
    function Cat(name) {
      Animal.call(this)
    }
    特点：可以实现多继承
    缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。
  3. 组合继承
  function Cat(name) {
    Animal.call(this)
  }
  Cat.prototype = new Animal()
  特点：可以继承实例属性/方法，也可以继承原型属性/方法
  缺点：调用了两次父类构造函数，生成了两份实例
  4. 寄生组合继承
  通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性
  5. 实例继承和拷贝继承 (实用性不强)
  实例继承：为父类实例添加新特性，作为子类实例返回
  拷贝继承: 拷贝父类元素上的属性和方法

## 多态
  就是通过对传递的参数判断来执行逻辑，即可实现一种多态处理机制
  在执行同一操作且作用于不同对象时，返回不同的结果。