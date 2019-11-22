- prototype的三角恋
    构造函数(construtor) 构造函数的原型对象{} 实例
    Person.prototype = {}
    Person.prototype.getName
    es6 class 只是语法糖
    Person 构造函数 都会有prototype属性 原型对象
    实例会通过prototype 对象拿到所有的方法
    person.getName();

    person.__proto__ === Person.prototype
    Person.prototype.constructor = Person
    Person 1=>n person

    person   Person.prototype
    实例如何拿到原型链上的方法呢？
    