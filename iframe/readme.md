## 代理
线上环境解决跨域：代理
生活中：中介

工具：live-server  webpack   nginx(上线)
代码层面：fe -> /api/post[node server] -> /api/post[java server]

以上都是反向代理：代理客户端
10 1中介 1房东
正向代理：代理服务器
1  1中介 10房东

一个域下面 ajax 请求 有并发限制
提交数据给服务器的时候 ajax 一般用来处理业务接口
日志提交 考虑到 ajax 并发限制 属于非核心业务 采用 img 的方式提交数据