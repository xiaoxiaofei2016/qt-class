// function identify() {
//     return this.name.toUpperCase()
// }
// function speak() {
//     var greeting = "Hello,I'm" + identify.call(this)
//     console.log(greeting)
// }
// var me = {
//     name:'wn'
// }
// var you = {
//     name:'menge'
// }

// console.log(identify.call(me));
// console.log(identify.call(you));

// console.log(speak.call(me));

// function identify(context) {
//     return context.name.toUpperCase()
// }
// console.log(identify(me));

// //this 提供一种更优雅的方式来隐式“传递”一个对象
// function identify() {
//     return this.name.toUpperCase()
// }
// console.log(identify.call(me));//.call方法使得identify能访问me




// function foo(num) {
//     console.log('foo'+num)
//     this.count++  //this不能代表foo,若没有被调用，则this指向window
// }
// foo.count = 0//给foo定义一个属性count，值为0
// for(var i = 0; i < 10; i++) {
//     if(i > 5) {
//         foo(i)
//     }
// }
// console.log(foo.count)  //0

//this不指向本身，谁调用它指向谁

// function foo(num) {
//     console.log('foo'+num)
//     data.count++
// }
// var data = {//全局对象
//     count:0
// }
// for(var i = 0; i < 10; i++) {
//     if(i > 5) {
//         foo(i)
//     }
// }
// console.log(data.count)  //4



// ---------------------------------------------------------------------------------------------------------

// function foo() {
//     var a = 2
//     bar()
// }
// var foo = {
//     a:1,
//     b:bar()
// }
// function bar() {
//     console.log(this.a)
// }
//不能使用this来引用一个词法作用域内部的东西
//--------------------------------------------------------------------------------

// function baz() {
//     //当前调用栈是baz
//     //因此，当前调用位置是全局作用域
//     console.log('baz')
//     bar()
// }
// function bar() {
//     //当前调用栈是baz(入栈) -> bar(出栈)
//     //因此，当前调用位置是baz
//     console.log('bar')
//     foo()
// }
// function foo() {
//     console.log('foo')
//     baz()
// }
// baz()
//-------------------------------------------------------------------
// function foo() {
//     "use strict"//严格模式  this不指向window，指向undefined
//     console.log(this.a)
// }
// var a = 2
// foo()
//---------------------------------------------------------------------

// function foo(){
//     console.log(this.a)
// }
// var obj = {
//     a:2,
//     foo:foo//拥有foo
// }
// obj.foo()  //2
//------------------------------------------------------------

function foo(){
    console.log(this.a)
}
var obj1 = {
    a:2,
    obj2:obj2
}
var obj2 = {
    a:24,
    foo:foo//拥有foo
}
obj1.obj2.foo()