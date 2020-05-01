## 生命周期
  1. componentWillMount 在渲染前调用,在客户端也在服务端。

  2. componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的     DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架       一 起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操    作  (防止异步操作阻塞UI)。

  3. componentWillReceiveProps(nextProps) 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

  4. shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调     用。在初始化时或者使用forceUpdate时不被调用。 
    可以在你确认不需要更新组件时使用。

  5. componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在    初始化时不会被调用。

  6. componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

  7. componentWillUnmount在组件从 DOM 中移除之前立刻被调用。( 清理操作
    定时器 全局绑定的方法)


  react 17 打算去掉componentWillMount，componentWillReceiveProps， componentWillUpdate
  # static getDerivedStateFromProps
  触发时间：组件构建之后，虚拟dom之后，实际dom挂载之前，以及每次获得新的props之后，每次接受新的props都会返回一个对象作为新的state，如果null则不需要更新state
  # getSnapshotBeforeUpdate
  update发生的时候，在render之后，在组件dom渲染之前。