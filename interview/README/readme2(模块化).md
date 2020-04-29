## 模块化
1. commonjs模块化 
  使用module.exports/exports来导出，用require来引入,可以在代码任何地方引入，相当于对值的拷贝（普通数据类型拷贝值，复杂数据类型拷贝值的引用）
2. es6模块化，典型vue的引入
  用export/erport defalut导出
  import XXX from '', import { XXX } from '',必须在代码顶部引入