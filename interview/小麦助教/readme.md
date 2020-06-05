## 一面
1. 前端存储localstorge, sessionstorge,cookie
2. http全过程
3. html渲染的过程，css Om树和Dom树有影响吗，js会影响Dom树吗？script放在body前是会先执行js吗？
   不管是内联样式还是外链css文件，都会阻碍后续的dom渲染，但是不会阻碍后续dom解析，css加载会影响后续的js语句的执行
   js会影响dom解析，但浏览器会偷看dom，预先下载相关资源

4. 事件循环，微任务与宏任务
  宏任务：script、setTimeout、setInterval
  微任务：Promise、process.nextTick
  事件循环(event loop):先执行完主线程 -> 执行所有微任务 -> 取出一个宏任务 -> 执行所有微任务

5. 实现promise链式调用，普通函数如何实现链式调用(只需要返回this即可)
let user = function(name, age) {
  this.name = name
  this.age = age
}
user.prototype.getName = function() {
  console.log(this.name)
  return this
}
user.prototype.getAge = function() {
  console.log(this.age)
  return this
}
let user1 = new user('cat', 3)
user1.getName().getage()



