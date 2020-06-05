## 跨域
  浏览器的安全策略
  a.com 请求b.com的时候，不允许

## cors
cross origin resource share
跨域资源共享
规定了 一些 http 的首部字段,允许 服务器申明 哪些站点 有资源的访问权限

## 简单请求 非简单请求
  简单请求：html原生 form 表单可以发出去的请求
  1. 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
  2. HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain


  非简单的：分两步 1：预检请求(如:OPTIONS)试探一下支不支持跨域  2：正式请求(如：POST)