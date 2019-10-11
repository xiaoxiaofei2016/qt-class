// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']   k = 2
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

console.log(Rshift(arr, 2))

// 解法一
// function Rshift(list, k) {
//   const copy = [...list]
//   const n = copy.length
//   if (k % n === 0) return
//   for (let i = 0; i < n; i++) {
//     list[i] = copy[(k + i) % n]
//     // i=0, list[0] = copy[2] list=['c', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//     // i=1, list[1] = copy[3] list=['c', 'd', 'c', 'd', 'e', 'f', 'g', 'h']
//     // i=2, list[2] = copy[4] list=['c', 'd', 'e', 'd', 'e', 'f', 'g', 'h']
//     // i=3, list[3] = copy[5] list=['c', 'd', 'e', 'f', 'e', 'f', 'g', 'h']
//   }
//   return list
// }


// 解法二
// function Rshift(list, k) {
//   const n = list.length
//   if (k % n === 0) return
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let t = null
//   while (cnt--) {
//     t = list[n - 1]
//     // 右移一位
//     for (let i = n - 1; i > 0; i--) {
//       list[i] = list[i - 1]
//     }
//     list[0] = t
//   }
//   return list
// }


// 解法三
// function Rshift(list, k) {
//   const n = list.length
//   let i = Math.abs(k > 0 ? k % n : n + (k % n))
//   return list.concat([...list]).slice(n - i, n * 2 - i)
// }


// 标准解答
// 先把[0, n - k - 1]翻转

// 然后把[n - k, n - 1]翻转

// 最后把[0, n - 1]翻转
function Rshift(list, k) {
  const n = list.length
  if (k % n === 0) return
  reverse(list, 0, n - k - 1)
  reverse(list, n - k, n - 1)
  reverse(list, 0, n - 1)
  return list
}
function reverse(list, start, end) {
  let t = null
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start++
    end--
  }
}