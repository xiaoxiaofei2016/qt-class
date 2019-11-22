function Animal(planet) {
    this.planet = planet
}
//constructor 函数是js的一等对象
//原型对象 return {planet:}

function Person(name) {
    this.name = name
}


Animal.prototype.getPlanet = function() {
    return this.planet
}
// 人类也在地球 
// 原型链跑 animal => Animal.prototype => Object
Person.prototype = new Animal('earth') //Animal相当于Person的父级，继承了方法

Person.prototype.getName = function() {
    return this.name
}

const person = new Person("三水请")

console.log(person.getPlanet())//Person继承了Animal的方法
console.log(person.getName())
console.log(Person.prototype.__proto__ === Animal.prototype) //true
console.log(person.__proto__.__proto__ === Animal.prototype) //true   person.__proto__ === Person.prototype
