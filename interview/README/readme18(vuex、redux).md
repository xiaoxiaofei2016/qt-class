## 相同
  1. 都是通过store来作为全局状态存储对象
  2. 改变store的直接方法(mutations 和 reducer),只允许同步操作
  3. 数据流动都是单向的
## 不同
  1. vuex只有展示组件(通过全局根部植入直接访问store),而redux中展示组件通过容器组件(provider)连接(connect)再进行访问。另外vuex自带module功能，而redux没有
  2. vuex消除了action的概念，Redux认为状态变更必须是由一次"行为"触发，VUEX仅仅认为在任何时候触发状态变化只需要进行mutation即可。Redux的Action必须是一个对象，而VUEX认为只要传递必要的参数即可，形式不做要求。
  3. vuex只能配合vue而redux可以配合任何框架
  4. vuex的异步操作只能在action中进行(异步函数是不能追踪的，mutations记录每次store的变化，因此mutations不允许有异步操作)，二redux中没有特别的为异步操作创建的一个方法
  5. vuex支持带缓存的gettes，用于state计算后的值，算是对提升性能方面做了些优化工作
