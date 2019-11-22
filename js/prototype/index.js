// es5 面向对象
function Person(name) {//女主角
    // constructor
    //Object { }
    this.name = name
}
//男主角
Person.prototype = {
    getName:function() {
        return this.name
    },
    playHpjy:function() {
        console.log('今晚吃鸡')
    }
}
//new + fun() 新的对象
//实例 第三者
let person = new Person('瓯街道');

console.log(person)