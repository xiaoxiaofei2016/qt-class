const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
function isBalanced(exp) {
  //数组用于实现栈或队列是最便宜的，连续的
  let info = exp.split(''),
      stack = []; // push pop 实现栈的操作，可以去掉最近加入的元素
  console.log(info); // 数组
  for (let i = 0; i < info.length; i++) {
    let el = info[i];
    if (el == "{") {
      stack.push("{");
    } else if (el == "}") {
      if (stack.length === 0) {
        return false;
      }else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
console.log(isBalanced(expression));

