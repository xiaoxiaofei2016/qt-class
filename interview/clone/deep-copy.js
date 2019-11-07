function cloneDeep(source) {
  if (typeof source != 'object') return source
  var target = Array.isArray(source) ? [] : {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

let a = {
    name: 'OY',
    book: {
      title: 'I like JS',
      price: '45'
    }
  }
// let a = [0, '1', [2, 3]]
let b = cloneDeep2(a)
a.name = 'wn'
a.book.price = '55'
// a[0] = 5
// a[2][0] = 6
console.log(b)


function cloneDeep2(a) {
  const root = {}
  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: a
    }
  ]
  while (loopList.length) {
    // 广度优先
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}