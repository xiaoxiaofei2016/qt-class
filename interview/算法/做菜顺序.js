/****
 * 一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。

  一道菜的 「喜爱时间」系数定义为烹饪这道菜以及之前每道菜所花费的时间乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。

  请你返回做完所有菜 「喜爱时间」总和的最大值为多少。

  你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。

  输入：satisfaction = [-1,-8,0,5,-9]
  输出：14
  解释：去掉第二道和最后一道菜，最大的喜爱时间系数和为 (-1*1 + 0*2 + 5*3 = 14) 。每道菜都需要花费 1 单位时间完成。

  输入：satisfaction = [-2,5,-1,0,3,-3]
  输出：35
 */

 /**
 * @param {number[]} satisfaction
 * @return {number}
 */
// var maxSatisfaction = function(satisfaction) {
//   satisfaction.sort((a, b) => a - b)
//   let sum = 0
//   for (let i = 0; i < satisfaction.length; i++) {
//     let temp = 0
//     for (let j = 0; j < satisfaction.length; j++) {
//       temp += satisfaction[j] * (j - i + 1)
//       console.log(j - i + 1)
//     }
//     sum = Math.max(sum, temp)
//   }
//   return sum
// };

var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => b - a)
  var sum = 0, val = 0, max = 0;
  for (var x of satisfaction){
      sum += x;
      val += sum;
      max = Math.max(max, val);
  }
  return max;
}


console.log(maxSatisfaction([-1,-8,0,5,-9])) // 14
// console.log(maxSatisfaction([4,3,2])) // 20
// console.log(maxSatisfaction([-1,-4,-5])) // 0