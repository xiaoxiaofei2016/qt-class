# es module
## 命名導出 
export const sdfg
import { sdfg } = '.js'
## 默認導出
export default 
import .. from '.js'

## h5 history api vs hash
hash 后面 不会发送给后端
刷新的时候 报错
history api 表示
后端无论收到什么请求都返回index.html
app.get('*', () => {
  render(index)
})


<script src="/static/a.js"/>
webpack publicPath默认公共路径 /  -> ./
html: index.html static/
后续
ip/static/a.js
没有拦截到
location / {
  root /usr/share/nginx/html
}