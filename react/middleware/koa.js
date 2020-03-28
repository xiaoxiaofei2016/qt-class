let middleWare1 = async function(ctx, next) {
  console.log(1)
  await next()
  console.log(2)
}
let middleWare2 = async function(ctx, next) {
  console.log(3)
}

let middleWare = [middleWare1, middleWare2]
run()
function run() {
  const dispatch = (index) => {
    const fn = middleWare[index]
    // 处理next 让它去到下一个中间件
    fn({}, () => {
      dispatch(index + 1)
    })
  }
  dispatch(0)
}
