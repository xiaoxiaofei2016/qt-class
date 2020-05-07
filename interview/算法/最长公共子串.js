/****
 * 输入: ["flower","flow","flight"]
    输出: "fl"
 */

var longestCommonPrefix = function(strs) {
  let i = 1,
      target = strs[0],
      targetIndex = 0
  while(i < strs.length) {
    if (strs[i].length < target.length) {
      target = strs[i]
      targetIndex = i
    }
    i++
  }
};
const strs = [ "flower", "flow", "flight", "f"]
console.log(longestCommonPrefix(strs))