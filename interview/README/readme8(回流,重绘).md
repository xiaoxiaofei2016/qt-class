# 浏览器渲染的过程
1. 解析html，生成DOM树,生成css OM树
2. 将DOm树和css OM树结合，生成渲染树(render tree)
3. 回流，根据生成的渲染树进行回流，得到节点的几何信息(位置、大小)
4. 重绘，根据渲染树和节点的几何信息得到节点的绝对像素
5. 将像素发给GPU，展示在页面上

# 回流一定会触发重绘，重绘不一定会触发回流

# 如何减少回流、重绘(就是减少DOM的操作)
1. 直接改变className，尽量不要动态改变样式(如: box.style.left = '10px'),
  如果要动态改变样式，则使用cssText
2. 避免使用table布局，在布局完全建立之前，table需要很多关口，table是可以影响之前已经进入的DOM的显示的元素。     即使一些小的变化也会导致table中所有其他节点回流。
3. 避免使用css的js表达式，因为每次都需要重新计算文档
4. 将需要多次回流的元素position属性设为absolute或fixed，这样该元素就会脱离文档流，它的变化不会影响其他元素变    化。比如动画效果应用到position属性为absolute或fixed的元素上。
5. 尽可能在DOM树的末端改变class，可以限制回流的范围，使其影响尽可能少的节点。
6. 不要经常访问会引起浏览器flush队列(刷新队列)的属性，如果你确实要访问，利用缓存

# 强制队列刷新
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
getComputedStyle()
getBoundingClientRect

# 浏览器渲染页面
js -> style -> layout -> paint -> composite
如何提升绘制的性能
  尽量使用影响较少的属性 如：transform   opcity(都不会经过layout,paint)
  为了达到composite，还需要提升层
  # 提升层的方法
  1. video
  2. transform :translate3d()
  3. backface-visibility: hidden
  4. will-change: opcity(或者transform、top、left等)
  5. 对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是运动的       animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）

建议：
由于 transition animation 也有提升层的作用，所以动画可以优先考虑 css3 动画。

#  图层越多越好吗？ 当然不是。提升合成层也得 消耗额外的内存和管理资源。



