小美

小王            req res http
    
    传纸条 暧昧
小谷

风险
1. 小王一定要传的 事情就败露了
    弹窗广告  网络挟持  index.html  iframe src...
    代替小美  拒绝小谷 http 不安全  https
2. 内容被偷窥，举报老师
3. 正常传递，内容复制，给班上所有女生群发

怎么办呢？
加密   瞬间
AES加密 对称加密   内容和密码 加密传给目标
小美  密码  解密一下 单独使用 ，小王拿到密码

非对称加密  耗CPU
    公钥和私钥 公钥共享 私钥只有自己用

先用非对称加密把对方密码传过来，再用对称加密（不传密码）



1. 我发的数据，不该看的别看
2. 我发的数据，不该看的人不能伪造和修改
3. 我发的数据，过期后不能偷偷拿来用

HTTPS
A 用户                                    C                                               B 网站

非对称加密（耗时间，耗电）                                                                有A的公钥 密码发给我
私钥得到密码
密码加密聊天内容 对称加密（瞬间）                                                             密码解密

https 有利于传输安全 有利于SEO