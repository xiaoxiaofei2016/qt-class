## 计算属性缓存VS 方法
  计算属性是基于响应式依赖进行缓存的，只有在相关响应式依赖发生改变时它才会重新求值，而函数每次调用都会执行

## 组件内data为什么是一个函数
  1. vue组件的data值不能为一个对象，因为对象是引用类型，组件可能被多个实例同时引用，如果data值为对象，将导致多个实例共享一个对象，其中一个组件改变data属性值，其他实例也会受到影响
  2. data为函数的原因:data为函数，通过return返回对象的拷贝，致使每个实例都有自己独立的对象，实例之间可以互不影响的改变data属性值

## 计算属性和watch
  watch是对某个属性进行监测，当数据变化时watch就会执行，并且可以在watch中进行异步操作，计算属性是他依赖的模块任意一个发生变化才会变化，并且不能进行异步操作

## 虚拟dom
渲染真实dom很消耗性能，影响用户体验
一次操作中有10次更新dom的操作，虚拟dom不会立即操作dom，而是将10次更新的diff保存到本地一个js对象中，最终将这个js对象一次性的attch到真实dom树上，这个js对象就是虚拟dom，比较新旧两次虚拟dom来看是否进行了更新

## diff算法
只会同层级比较，不会跨层级。
平层Diff，只有以下4种情况：
1. 节点类型变了(replace)
例如：p -> h3,旧节点包括它的子节点都将被卸载，所以尽量避免无谓的节点类型的变化，如将div变为p
2. 节点类型一样，属性或属性值变了(props)
不会触发节点卸载和装卸，而是节点更新
3. 文本变了(text): 直接修改文字内容
4. 移动/增加/删除 子节点(reorder)

## vue响应系统三大核心：observer、watcher、dep
1. observer遍历data中的属性，使用Object.defineProperty的get、set方法对其进行数据劫持
2. dep：每个属性拥有自己的消息订阅器dep，用于存放所有订阅了该属性的观察者对象
3. watcher：观察者(对象),通过dep实现对响应属性的监听，监听到结果后，主动触发自己的回调进行响应

## vue3.0
new Proxy(obj, {
  get(target, name) {
    return Reflect.get(target, name)
  }
  set(target, name, value) {
    let res = Reflect.set(target, name, value)
    return res
  }
})

Reflect是保证原生行为能够正常执行，然后再部署额外的功能