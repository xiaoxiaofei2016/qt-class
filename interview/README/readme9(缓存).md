## 强缓存
  http1.1 cache-control : 相对的时间 +1h 优先级大于expires
  http1.0 expires ： 固定的时间前有效 (如：20:00)

  请求：不发请求，直接走缓存

  304: from memory / from disk 304状态码，从内存或者硬盘中读取

## 协商缓存
 1. a.js
  2. - 服务器:etag: '123'   md5(a.js)
  3. - 请求: if-none-match: '123'
  4. 服务器判断 req.headers[if-none-match] == md5(a.js) ？ 返回304(not a modified直接从缓存里面取) : 返回200(返回最新的资源)
  如果字符串一样，说明没有改变
  etag是文件的hash值：md5
  同样的输入同样的输出

  - 服务响应头: last-modified: 2018:12:11
  - 再次请求请求头: if-modified-since: 2018:12:11
  文件最后的修改时间

  文件最后的修改时间变了，但是内容没变(即修改了又撤销了修改)，用etag才能识别出来