/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

const root1 = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 6,
    right: {
      value: 7
    }
  }
}

const root = [5,3,6,2,4,null,7]

var getArray = function(root, arr) {
  if (!root) return;
  getArray(root.left, arr)
  arr.push(root.value)
  getArray(root.right, arr)
}
var findTarget = function(root, k) {
  let array = []
  getArray(root, array)
  console.log(array)
  let map = new Map()
  for (let i = 0; i < array.length; i++) {
    let targetSub = k - array[i] // 5: 0, 3: 1, 2: 2, 4: 3
    if (map.has(targetSub)) {
      return true
    }  
    map.set(array[i], i)
  }
  return false
};

console.log(findTarget(root, 8))