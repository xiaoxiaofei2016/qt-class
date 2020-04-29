/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /**
     {给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
    数组中同一个元素不能使用两遍
  */

const nums = [1, 2, 3, 4, 3, 5], target = 6
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] == target) {
//           return [i, j]
//         }
//       }
//     }
// };

// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let sub = target - nums[i] // 7
//     if (nums.indexOf(sub, i + 1) != -1) {
//       return [i, nums.indexOf(sub, i + 1)]
//     }
//   }
// }

var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i]
    if (map.has(sub)) {
      return [map.get(sub), i]
    } else {
      map.set(nums[i], i)  // {1 => 0, 2 => 1, 3 => 2}
    }
    console.log(map)
  }
}

console.log(twoSum(nums, target))