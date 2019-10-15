var { counter, obj, changeValue } = require('./node-common.js')

console.log(counter, obj); // 3 { name: 'David' }
changeValue()
console.log(counter, obj); // 3 { name: 'Tom' }
// 类似原生js里的复制 基本数据类型与复杂数据类类型
var a = 1; var b = a; a = 2;
var aa = {}; var bb = aa; aa.name = 'bbname'
// commonJS require 的时候 类比 js
// 基本数据类型 复杂数据类型 的基础
// 他也就是 复制了一份导出来的东西