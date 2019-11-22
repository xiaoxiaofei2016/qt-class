const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';

//js 正则
function isBalanced(exp) {
  const reg = /{}/g;
  let len;
  do {
    len = exp.length;
    exp = exp.replace(reg, "")
    console.log(len);
    console.log(exp);
  } while(len != exp.length) // len == exp.length退出循环

  return exp.length === 0;
}
console.log(isBalanced(expression));