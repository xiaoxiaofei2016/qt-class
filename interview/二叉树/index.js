var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 前序遍历的递归方法
var preOrder1 = function (node) {
  if (node) {
    console.log(node.value)
    preOrder1(node.left)
    preOrder1(node.right)
  } 
}
// 中序遍历的递归方法
var preOrder2 = function (node) {
  if (node) {
    preOrder2(node.left)
    console.log(node.value)
    preOrder2(node.right)
  } 
}
// 后序遍历的递归方法
var preOrder3 = function (node) {
  if (node) {
    preOrder3(node.left)
    preOrder3(node.right)
    console.log(node.value)
  } 
}

preOrder1(tree)
preOrder2(tree)
preOrder3(tree)


// 深度优先非递归 相当于前序遍历
var preOrderUnrecur = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while (stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    else if (node.left) {
      stack.push(node.left)
    }
  }
}

preOrderUnrecur(tree)

// 广度优先非递归 同级从左到右,不同级从上到下
function BreadthFirstUnrecur (biTree) {
  let queue = []
  queue.push(biTree)
  while (queue.length !== 0) {
    let node = queue.shift()
    console.log(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}

BreadthFirstUnrecur(tree)