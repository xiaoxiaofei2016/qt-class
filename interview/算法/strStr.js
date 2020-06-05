/***
 * 输入: haystack = "hello", needle = "ll"
   输出: 2
   输入: haystack = "aaaaa", needle = "bba"
   输出: -1
 */

var strStr = function(haystack, needle) {
  if (needle == '') return 0
  if (haystack.length < needle.length) return -1
  
}