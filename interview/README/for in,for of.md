## for in遍历可枚举属性，可以遍历对象，也可以遍历数组
  1. var obj = {a:1, b:2, c:3};
      for (var prop in obj) {
          console.log(prop); // a, b, c
      }
  2. var arr=[11,22,33,44,55];
      for(var i in arr){
          if(i<4){
              console.log(i) // 0, 1, 2, 3
          }
      }
    注意： 这里的i并不是指的数组下标，只是默认为数组下标的字符串而已
# 总结：
  1. 遍历的是key（Object.keys也可以）
  2. 会遍历原型上的key
  3. 遍历数组会不按照顺序
  4. 可以中断 continue break

## for of 遍历的是有迭代器对象(数组 字符串 map set)集合的值
  1. 不能遍历对象（对象没有迭代器）
  2. 也可以响应break continue
