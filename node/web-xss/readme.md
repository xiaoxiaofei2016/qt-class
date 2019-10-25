## XSS
cross site script 跨站脚本攻击
用不合法的途径 web页面插入可执行的代码
攻击类型：
1. 反射型：
  xss 代码存在 url中，服务器解析请求，把xss的代码一并返回，web网页得到响应，执行了XSS代码，过程像一次反射一样

2. 存储型
  与反射型的区别：xss的代码有没有永久保留在服务器(数据库，文件...)



## 防护
编码 html entity 编码 <  ->   "&lt;"  "" ->  "&nbsp;"
<script>alert(123)</script>  过滤->  <script>XXX</script> 
过滤 onerror onclick属性
校正 