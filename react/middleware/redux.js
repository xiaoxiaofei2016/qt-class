const mid1 = next => action => {
  console.log(1)
  next()
  console.log(2)
}

// mid1(mid2())
// 需要 next
// 指向下一项 mid2
// 组合 从左到右 组合完之后 把mid2交给mid1
const mid2 = next => action => {
  console.log(3)
  next()
  console.log(4)
}
const mids = [mid1, mid2]

/**
 * mid1 () {
 *  console.log(1)
 *  next === mid2() // mid2的返回值
 *  console.log(2)
 * }
 */

 let fn1 = str => str.split('')
 let fn2 = str => str.toLocaleLowerCase()
 function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
const opt = compose(fn1, fn2)
// compose === fn1(fn2('ABCDE'))
fn1(fn2('ABCDE'))
console.log(opt('ABCDE'))

const chain = compose(...mids)
// redux dispatch
// dispatch一个对象
// 有了thunk 能够dispatch 一个函数
// if (action === function) {
//   if (action === promise) {
//     // 执行原始的 dispatch
//   }
// }

let nbDispatch = chain(() => {
  console.log('我是最原始的dispatch')
})
nbDispatch()