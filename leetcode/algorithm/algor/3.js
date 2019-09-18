const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';

const isBalanced = (str) => {
  // [{()}]
  // es6新增数据结构 hashmap 映射
  const map = new Map([
    ["{","}"],
    ["(",")"],
    ["[","]"]
  ]);
  // console.log(map.get("{"));
  // for (let [key, val] of map) {
  //   console.log([key, val]);
  // }
  // console.log([...map.values()])
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let node = str[i];
    console.log(node);
    if (map.has(node)) {
      stack.push(node);
    } else if ([...map.values()].includes(node)) { 
      let key = stack[stack.length - 1];
      if (map.get(key) != node) {
        return false;
      }
      stack.splice(stack.length - 1, 1);
    }
    return stack.length === 0;
  }
  // map.set

}
console.log(isBalanced(expression));