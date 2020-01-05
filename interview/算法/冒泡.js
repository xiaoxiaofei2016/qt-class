function bubbleSort(arr) {
  var len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
        var temp = arr[j + 1] // 元素交换
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
      // console.log(arr)
    }
    console.log(arr)
  }
  return arr
}
var arr= [300, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
bubbleSort(arr)
// 总结:
// 第1和第2比，大的放后面，小的放前面；
// 新的第2和第三比，大的放后面，小的放前面
// 。。。
// 第一轮循环:最后一个就是整个数组最大的数
// 第二轮循环:倒数第二个就是整个数组第二大的数
// 。。。
// 最后排序完成


