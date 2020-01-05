var { counter, obj, changeValue } = require('./commonjs2.js')

console.log(counter, obj); // 3 { name: 'David' }
changeValue()
console.log(counter, obj); // 3 { name: 'Tom' }
// 类似原生js里的复制 基本数据类型与复杂数据类类型，基本数据类型不变，引用数据类型复制的是指针，所以可以改变
var a = 1; var b = a; b = 2;
var aa = {}; var bb = aa; bb.name = 'bbname'
// commonJS require 的时候 类比 js
// 基本数据类型 复杂数据类型 的基础
// 他也就是 复制了一份导出来的东西

// es-module 一边改了另一边也改了
// es-module import必须写在顶部，能够在代码静态分析的时候知道导入了哪些模块 commonjs module require()可以出现在任何位置
// 按需引入