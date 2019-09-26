## 
<template>
  <div>
    <slot></slot>
    <el-button></el-button>
  </div>
</template>

里面的东西 都会被编译为 
h('div', {}, [children])
地址：babeljs.io

h函数的返回
一个对象
{
  详细的描述了，该标签(<div/><component/>)上的信息:props, id, class, 子节点
}
虚拟节点(virtual node) Vnode
虚拟DOM: Vnode建立起来的一棵树