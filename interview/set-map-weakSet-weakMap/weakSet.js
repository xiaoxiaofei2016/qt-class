// weakSet 对象允许你将弱引用对象存储在一个集合中 --- 弱引用版本的Set
var test = {
  name: 'test',
  content: {
    name: 'wn',
    age: '12'
  }
}
var ws = new WeakSet()
ws.add(test.content)
var a = { foo: 'bar' }
ws.add(a)
ws.delete(a)
console.log(ws)
ws.delete(test.content) // delete前已经被回收了
console.log(ws)

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method只能在Foo的实例上调用')
    }
  }
}


let weakmap = new WeakMap();
(function(){ 
  let o = {n: 1}; 
  weakmap.set(o, "A");
})();  // here 'o' key is garbage collected
let s = {m: 1};
weakmap.set(s, "B");
console.log(weakmap.get(s));
console.log(...weakmap); // exception thrown不可遍历
weakmap.delete(s);
weakmap.clear(); // Exception, no such function
let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]); //this works
console.log(weakmap_1.size); //undefined”复制代码 没有.size属性