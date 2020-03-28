function simpleClone(initialObj) {
    var obj = {};
    for (var key in initialObj) {
        obj[key] = initialObj[key];
    }
    return obj;
}

var obj = {
    a: 'hello',
    b: {
      c: 12
    }
}

var cloneObj = simpleClone(obj);
cloneObj.a = '你好';
cloneObj.b.c = 11
console.log(obj); 
console.log(cloneObj); 



console.log('-------------------------------------');

var obj1 = {a: {a: 'Hello',b: 21}};
var initialObj1 = Object.assign({},obj1);
initialObj1.a.b = 10
console.log(initialObj1)
console.log(obj1)

var arr = [1, 2, [3, 4]]
var b = arr.slice(0)
b.push(5)
b[2][0] = 6
console.log(arr)
console.log(b)