## hoc
1. 层次过多 Wrapper hell
```js
function Hoc(Com) {
  class With {

  }
  return With
}
```

## react15 function组件 没有this，没有生命周期，没有state，只负责单纯的接收 props 纯渲染

## react16 hooks 作用：组件之间逻辑重用，相比hoc 解决包装地狱等 让逻辑扁平化 就像Promise async