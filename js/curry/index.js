// 普世
const curry = require('./b.js');
function checkByRegExp(reg,string) {
    return reg.test(string);
}

let checkCellPhone = curry(checkByRegExp)('/^1[3-9]\d{9}$/');
console.log(checkCellPhone('13240407878'));
let checkEmail = curry(checkByRegExp)('/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/');
console.log(checkEmail('2695647975@qq.com.cn'));

console.log(checkByRegExp(/^1[3-9]\d{9}$/,'18307079104'));
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'2695647975@qq.com.cn'));//*表示匹配0次或多次；+表示匹配1次或多次





