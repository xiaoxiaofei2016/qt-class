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
module.exports = koa;
// koa中间件