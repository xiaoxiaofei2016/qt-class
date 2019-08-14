## 
1.箭头函数 不支持重名形参，普通函数可以
2.箭头函数 没有this箭头函数 this 指向定义时候所处的上下文的this
call apply 不能改变 箭头函数 this


## 类数组
1.length
2.索引获取值
arguments 
转为真正的数组
1.Array.from()
2.Array.prototype.slice.call()

## this
调用的时候再确定下来
obj.fun() fun this指向obj