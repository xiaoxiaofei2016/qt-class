## 
SEO:浏览器会爬取html内容，为了 SEO 我们要放文字在上面，为了美观，放图片，
场景：网站的logo
## css 选择器 优先级
高  -> 低：
!important
style   (1000)
id      (100)
class   (10)
元素/伪元素   (*)       (1)
同等优先级 按照css定义的顺序后出现的覆盖先出现的
.red{color:red}
.blue{color:blue}
<span class="blue red">123</span>  123为蓝色


## animation-fill-mode
forwards:动画结束将元素的样式设为动画最后一帧的样式
none:
backwards:动画开始前将元素的样式设为动画第一帧的样式
both:forwards + backwards