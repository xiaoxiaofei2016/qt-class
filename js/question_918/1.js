//1
const box = { a: 10, b: { c: 100} };
// Object.freeze(box); //冻结第一层，不能修改
// box.a = 100;
// box.b.c = 1000;
// 可变是万恶之源
const box1 = box;
box1.a = 1000
console.log(box); 

const arr = [2, 3, 4, 6, [12,34]];
Object.freeze(arr);
arr[4] = 12;
console.log(arr);

console.log('-------------------------------')
//2
const { name: myName } = { name: 'lihua'};
console.log(myName);

console.log('------------------------------------')
//3
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    } else {
      const r = num + 10;
      cache[num] = r;
      return `calcul ${r}`;
    }
  }
}
const addFunc = add(); // addFunc是返回的方法，是add()调用完返回的函数
console.log(addFunc(10)); // cacul 20
console.log(addFunc(10)); // from cache 10
console.log(addFunc(2 * 5)); // from cache 10

console.log('-----------------------------------------')
//4
const arr4 = ['lihua', 'lilei'];
for (let item1 in arr4) { // 枚举一个对象里面的属性 把数组转为对象{'0': 'lihua', '1': 'lilei'}
  console.log(item1);
}
for (let item2 of arr4) { // 数组 Map Set String (可迭代对象) for of 可以用来遍历可迭代对象
  console.log(item2);
}

console.log('------------------------------------------------')
//5
var status = 'global';
var obj = {
  status: 'obj',
  getStatus: function() {
    return this.status;
  }
}
console.log(obj.getStatus()); // obj
var fun = obj.getStatus;
console.log(fun()); // global


// call apply bind
// bind返回一个绑定了this的函数
function bar() {
  console.log(this.name);
}
var obj3 = {
  name: 'obj3'
}
var cbar = bar.call(obj3); //call绑定this并调用bar() 所以输出了obj3
var bbar = bar.bind(obj3); 
console.log(typeof bbar) // function
bbar(); // obj3

console.log('-------------------------------------')
//4 
function Test() {
  this.name = 'name';
  // this 指向 test
  // 往test 上面添加一个name 属性
}
var test = new Test();
// Test 里面 this 指向 test
// 优先级
// new > bind > obj.getStatus() > getStatus()

var bindObj = {
  name: '123'
}
function TestNew() {
  this.age = 20;
}
const bindTestNew = TestNew.bind(bindObj);
var res = new bindTestNew();
console.log(bindObj) // new优先级高于bind { name: '123' }
console.log(res) // TestNew { age: 20 }

console.log('--------------------------------------')
//6
// function Foo() {} 
// 语法糖，背后还是es5
class Foo {} 
console.log(typeof Foo); // function

console.log('----------------------------------')
//7
// Symbol es6新增的一个数据类型
// string number Boolean null undefined Sybol Object
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b); // false
// 给对象添加属性不会覆盖之前的属性
var obj = {
  [a]: 'a value',
  b: 'a value'
}
console.log(Object.keys(obj));
console.log(a in obj)
 // 返回一个可枚举的属性 Symbol不可以枚举
 console.log(Object.getOwnPropertySymbols(obj));