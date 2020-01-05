// [1, [2, [3, 4]]]
// [1, 2, 3, 4]
function flat(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.concat(flat(arr[i]))
    }
    res.push(arr[i])
  }
  return res
}
// 一层一层进去再一层一层出来，与koa洋葱模型类似