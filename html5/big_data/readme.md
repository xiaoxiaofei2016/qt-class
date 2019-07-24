-网页上显示大量的html也是负担
    http 请求 3000 伺服状态  Server
    /index.html 传输给浏览器Client
    192.168.43.205  localhost
    172.20.10.5 局域网  远程
    浏览器 访问代理Client  ip:8080 下载下来（1.5s   say bay）
    远程 服务器 （IP，domain）伺服状态（http）  li-server
    8080

    分页 ？limit=20&page=1
    html5 来实现

    http 超文本传输协议
    文件太大 分几次，等时间长  对大数据做分页
    http 状态码 304 文件没有修改，使用浏览器缓存

    -得益于 es6 Array.from({length:n},(v,k)=>`新闻${k}`)  前端模拟大数据
    -按页分割  分割好，Array.from({length:Math.ceil(arr.length/size),(v,k)=>Array.from({
        length:size,()=>{}
    })})
