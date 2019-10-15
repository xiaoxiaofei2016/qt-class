<template>
  <div class="site-topbar">
    <div class="container">
      <div class="topbar-nav">
        <a href="/">小米商城</a>
        <span class="sep">|</span>
        <a href="/">MIUI</a>
        <span class="sep">|</span>
        <a href="/">IoT</a>
        <span class="sep">|</span>
        <a href="/">云服务</a>
        <span class="sep">|</span>
        <a href="/">金融</a>
        <span class="sep">|</span>
        <a href="/">有品</a>
        <span class="sep">|</span>
        <a href="/">小爱开放平台</a>
        <span class="sep">|</span>
        <a href="/">企业团购</a>
        <span class="sep">|</span>
        <a href="/">资质证照</a>
        <span class="sep">|</span>
        <a href="/">协议规则</a>
        <span class="sep">|</span>
        <a href="/" class="topbar-download">下载app
          <span class="appcode">
            <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城" width="90" height="90">小米商城
          </span>
        </a>
        <span class="sep">|</span>
        <a href="/">Select Location</a>
      </div>
      <div class="topbar-cart">
        <a href="" class="cart-mini">
          <i class="iconfont-cart"></i>
          <i class="iconfont-cart-full hide"></i>
          购物车
          <span class="cart-mini-num">(0)</span>
        </a>
        <div class="cart-menu">
          <div class="menu-content">
            <div class="loading">
              <div class="loader"></div>
              <ul class="cart-list hide"></ul>
              <div class="cart-total clearfix hide"></div>
              <div class="msg msg-error hide"></div>
              <div class="msg msg-empty hide">购物车中还没有商品，赶紧选购吧!</div>
            </div>
          </div>
        </div>
      </div>
      <div class="topbar-info">
        <a href="">登录</a>
        <span class="sep">|</span>
        <a href="">注册</a>
        <span class="sep">|</span>
        <span class="message">
          <a href="">
            消息通知
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.site-topbar {
  position: relative;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
  z-index: 30;
}
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  display: inline-block;
}
.container::before {
  content: '';
  display: table;
}
.topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px;
}
.site-topbar a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block;
}
.site-topbar .sep {
  margin: 0.3em;
  color: #424242;
}
.site-topbar .topbar-download {
  position: relative;
}
.topbar-download .appcode {
  position: absolute;
  top: 40px;
  left: 50%;
  width: 124px;
  height: 0;
  background: #fff;
  margin-left: -55px;
  box-shadow: 0 1px 5px #aaa;
  text-align: center;
  font-size: 14px;
  color: #333;
  line-height: 1;
  overflow: hidden;
  transition: height 0.3s;
}
.container .topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  transition: all 0.2s;
  font-size: 12px;
}
.topbar-cart .cart-mini {
  position: relative;
  z-index: 32;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242;
}
.cart-mini i {
  margin-right: 4px;
  font-size: 20px;
  line-height: 20px;
  vertical-align: -4px;
}
.cart-menu {
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 31;
  width: 316px;
  height: 0;
  color: #424242;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: height 0.3s;
}
.menu-content {
  padding: 20px 0 0;
}
.loading {
  margin: 0 20px 20px;
  text-align: center;
}
.cart-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.hide {
  display: none!important;
}
.cart-total {
  padding: 15px 20px;
  background: #fafafa;
}
.msg {
  padding: 20px 0 20px;
}
</style>
