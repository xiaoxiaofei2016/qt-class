## cookies sessionStorage localStorage
  # cookies
  随着用户的请求，同源自动带到请求头里面
  cookie：4kb
  ...Storage: 5MB

  cookie字段
  name、value、doman:域名、 path: 路径 / /a /a/b具有包含关系，cookie设置在/a/b的话，/和/a就拿不到(客户端)；
  httponly:如果设为true，不能通过js获取cookie （客户端无法设置httponly,服务端才可以设置）
  secure: 如果设为true，只会在https协议下传输
  max-Age:生效时间

  cookie可以来自于js的设置，也可以来自于后端的ctx.cookies.set()

  xss攻击会窃取cookie，设置了httponly为true，可以很好地防范xss攻击

# localStorage
 永久存储，不会随着浏览器关闭或刷新而消失，只能手动设置localstorage.removeItem()
# sessionstorage
 会话存储，浏览器关闭刷新页面都会消失
