
function A() {
  return new Promise((resolve, reject) => {
    resolve('成功了')
  })
}
function B() {
  return new Promise((resolve, reject) => {
    resolve('success')
  })
}
function C() {
  return new Promise((resolve, reject) => {
    reject('失败了')
  })
}

  let D =  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我是1秒后完成')
    }, 1000)
  })


  let E = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我是2秒后完成')
    }, 2000)
  })


Promise.all([A(), B()]).then(res => {
  console.log(res)       // [ '成功了', 'success' ]
})

Promise.race([A(), B()]).then(res => {
  console.log(res)      // 成功了
})

Promise.race([A(), B(), C()]).then(res => {
  console.log(res)  // 成功了
}).catch(err => {
  console.log(err)
})

Promise.all([A(), B(), C()]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err) // 失败了
})

Promise.race([D, E]).then(res => {
  console.log(res)
})

