## 强缓存
  http1.1 cache-control : 相对的时间 +1h 优先级大于expires
  http1.0 expires ： 固定的时间前有效 (如：20:00)

  请求：不发请求，直接走缓存

  200: from memory / from disk 200状态码，直接从内存或者硬盘中读取

## 协商缓存
 1. a.js
  2. - 服务器:etag: '123'   md5(a.js)
  3. - 请求: if-none-match: '123'
  4. 服务器判断 req.headers[if-none-match] == md5(a.js) ？ 返回304(not a modified直接从缓存里面取) : 返回200(返回最新的资源)
  如果字符串一样，说明没有改变
  etag是文件的hash值：md5
  同样的输入同样的输出

  - 服务: last-modified:2018:12:11
  - 请求: if-modified: 2018:12:11
  文件最后的修改时间

  文件最后的修改时间变了，但是内容没变(即修改了又撤销了修改)，用etag才能识别出来

  steps
  1. html 解析 dom树
  2. css -> css OM树
  3. 渲染树
  4. layout
  5. paint
  6. 合成 composite

  js -> layout -> paint -> composite
   layout: 元素大小、位置发生改变 
   paint: color shadow
   composite: transfrom opacity 发生变化的元素必须在一个合成层上面

   都是:针对元素所在当前这一个层的

 提升层的方法:
 1. transfrom3d
 2. will-change
 3. css3: animation transtion 开始的时候，结束后层不在了
 4. backface-visiablity: hidden;
 5. video标签

提升层的好处:
  元素变化只会影响当前这一个层

层越多越好吗？
  每提升一个层都需要内存消耗，不能滥用