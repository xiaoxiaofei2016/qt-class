## 洋葱模型
  1. 先执行第一个中间件（执行 dispatch(0)），该中间件返回 Promise，然后被 Koa 监    听，执行对应的逻辑（成功或失败）
  2. 在执行第一个中间件的逻辑时，遇到 await next()时，会继续执行 dispatch(i+1)，也  就是执行 dispatch(1)，会手动触发执行第二个中间件。
    这时候，第一个中间件 await    next() 后面的代码就会被 pending，等待 await next() 返回 Promise，
    才会继续执行第一个中间件 await next() 后面的代码。
  3. 直到最后一个中间件执行完,然后返回 Promise，然后倒数第二个中间件才执行后续的代    码, 并返回Promise

class koa {
  constructor() {
    this.middleWare = [];
  }
  use(fn) {
    this.middleWare.push(fn);
    return this;// 实现链式调用
  }
  run() {
    // application compose:中间件
    const dispatch = (i) => {
      let fn = this.middleWare[i];
      if (!fn) return Promise.reject()
      // fn为ues进来的函数 fn的参数为ctx和next
      // 1
      // fn({ ctx: 'ctx' }, () => {
      //   // next
      //   return dispatch(i + 1);
      // })
      // 2
      return Promise.resolve(fn({ ctx: 'ctx' }, () => {
        // next
        return dispatch(i + 1);
      }))
    }
    dispatch(0)
  }
}