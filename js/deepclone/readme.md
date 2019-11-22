- 为什么所有公司都考这道题
    内部有性能优化的考点
- 性能优化
    1. chrome 自带的性能优化工具
    console.warn()   console.error()
    console.time('for-in')   console.timeEnd('for-in')  计时
    顺序执行  瞬时执行
    2. for key in 性能不太好 用for代替  while最快
- 浅拷贝 返回的对象并不是独立的新的对象，跟直观理解有差异
- 浅拷贝 深拷贝 规避内存指向同一地址问题
    返回新对象 JSON.parse(JSON.stringify()) 但是函数不会被JSON.stringify()
- 递归 
    大的问题，由多个 类似 (clone)问题构成，
    并且有一个退出条件，
    clone 多层JSON嵌套 由内到外的一层层解决
    一层时，直接返回
    