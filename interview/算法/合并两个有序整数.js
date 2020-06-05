/****
 * 输入:
    nums1 = [1,2,3,0,0,0], m = 4
    nums2 = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6]

 */

var merge = function(nums1, m, nums2, n) {
  nums1.splice(m - nums1.length, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
  console.log(nums1)
};

console.log(merge([1,2,3,0,0,0], 4, [2,5,6], 3))