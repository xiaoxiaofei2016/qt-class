// 简单类型的拷贝是拷贝值
let a = 1; //值
let b = a;
b = 2;
console.log(a);//1

//复杂数据类型，拷贝是引用式赋值
let obj = {
    a:1,
    b: function() {
        console.log('bbb');
    }
}

// 数组中有什么操作，改变原数组 
obj2 = JSON.parse(JSON.stringify(obj)); //深拷贝 {a:1} -> {"a":1} -> {a:1}  返回新的对象，新的内存地址
// obj2 = obj; //浅拷贝
obj2.a = 2;
//浅拷贝
console.log(obj2);
