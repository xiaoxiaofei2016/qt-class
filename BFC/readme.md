# BFC 概念
Block Formatting Context(快级格式化上下文)

#BFC 的渲染规则
1.BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔绝的空间，外面的元素不会不会影响BFC里面的元素，反之，里面的元素也不会影响外面的元素
2.BFC的区域不会与浮动元素box重叠
3.解决垂直方向的外边距会发生边距重叠（包括父子元素，兄弟元素）

#BFC的创建条件
1.overflow 的值不为visible，inital，unset
2.float 的值不为none
3.行内快inline-block
4.表格单元display:table-cell
5.绝对定位（absolute，flex）