1. const  let
2. 模板字符串
3. 箭头函数
4. 定义参数默认值的形式
  // ES6之前，当未传入参数时，text = 'default'；
  function printText(text) {
      text = text || 'default';
      console.log(text);
  }

  // ES6；
  function printText(text = 'default') {
      console.log(text);
  }
5. rest/spread (...操作符)
6. 对象和数组解构
7. 对象超类：super
8. for of 和 for in
9. 类class
10. promise 常用的all、race、resolve、reject等方法
11. set数据结构