- css处理
  - 某个盒子里的子元素占据一页
  - 事件 onscroll  很多次，节流
  - transform transition
  - 面向对象
- jquery API  $()怎么实现?
$(fn)  原生js也是有生命周期的，我们叫他事件
JS是基于事件的脚本语言 找对的生命周期
$('.container)  querySelector方法

typeof参数  function 走分支
.find()查找 querySelector
.css(cssname, val)  .height()

vue 统统没有
vue MVVM 尽量减少DOM编程，要花很多内存的，vue可以优化它

vue 生命周期  js 事件
.innerHTML  css width()
<template>
  <div :width="width">
    {{a}}
  </div>
</template>
减少DOM操作
