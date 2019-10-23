## 依赖
- cnpm i koa koa-router koa-views -S
- cnpm i ejs -s
- cnpm i koa-bodyparser -s
- cnpm i jsonwebtoken -s

## jwt
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjAsImlhdCI6MTU3MTgxOTk2MiwiZXhwIjoxNTcxODIwMDIyfQ.2FHveER_jycFPSN7xGFR7jiZEQr1bUyguPO8MQws4u0"
  三部分
  Header: 
  ```JS
  {
  "alg": "HS256", <!-- 加密算法 默认HS256 sha256 哈希算法 -->
  "typ": "JWT"
  }
  ```
  part1: base64(Header) 编码完的
  bases64: 用 64 个字符表示 A-Za-z0-9

  Payload：
  ```JS
  {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "expiretionTime": 30d
  }
  ```
  part2: bases64(Payload)

  Signature:
  part3: sha256(part1 + part2, '密钥')

  完整token：part1.part.part3
