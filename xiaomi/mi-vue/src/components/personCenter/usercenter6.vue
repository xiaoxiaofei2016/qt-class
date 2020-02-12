<template>
  <div class="uc-box uc-main-box">
    <div class="uc-content-box portal-content-box">
      <div class="box-bd">
        <div class="portal-main clearfix">
          <div class="user-card">
            <h2 class="username">huahai</h2>
            <p class="tip">下午好～</p>
            <router-link to="" class="link">修改个人信息 ></router-link>
            <img class="avatar" src="//s01.mifile.cn/i/user/portal-icon-1.png" width="150" height="150"/>
          </div>
          <div class="user-actions">
            <ul class="action-list">
              <li>
                账户安全：
                <span class="level level-3">较高</span>
              </li>
              <li>
                绑定手机：
                <span class="tel">183********04</span>
              </li>

              <li>
                绑定邮箱：
                <span class="tel">26*******5@q*.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="portal-sub">
          <ul class="info-list clearfix">
            <li>
              <h3>
                待支付的订单：
                <span class="num">0</span>
              </h3>
              <router-link to="">
                查看待支付订单
                <i class="iconfont">&#xe605;</i>
              </router-link>
              <img src="//s01.mifile.cn/i/user/portal-icon-1.png" alt />
            </li>
            <li>
              <h3>
                待收货的订单：
                <span class="num">0</span>
              </h3>
              <router-link to="">
                查看待收货订单
                <i class="iconfont">&#xe605;</i>
              </router-link>
              <img src="//s01.mifile.cn/i/user/portal-icon-2.png" alt />
            </li>
            <li>
              <h3>
                待评价商品数：
                <span class="num">0</span>
              </h3>
              <router-link to="">
                查看待评价商品
                <i class="iconfont">&#xe605;</i>
              </router-link>
              <img src="//s01.mifile.cn/i/user/portal-icon-3.png" alt />
            </li>
            <li>
              <h3>
                喜欢的商品：
                <span class="num">0</span>
              </h3>
              <router-link to="">
                查看喜欢的商品
                <i class="iconfont">&#xe605;</i>
              </router-link>
              <img src="//s01.mifile.cn/i/user/portal-icon-4.png" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.uc-box
  background #fff
.uc-main-box
  padding 36px 0
  .uc-content-box
    margin 0 48px
  .portal-content-box
    .box-bd
      padding-top 24px
      .portal-main
        .user-card
          position: relative
          float left
          width 302px
          height 160px
          padding-left 180px
          padding-top 40px
          .avatar
            position: absolute;
            left: 0;
            top: 0;
            padding: 4px;
            border: 1px solid #e0e0e0;
            border-radius: 150px
          .username
            margin-bottom : 10px;
            font-size: 24px;
            font-weight: 400;
            color: #616161
          .tip
            margin: 0 0 10px;
            color: #b0b0b0
          .link
            font-size: 12px;
            color: #ff6700
        .user-actions
          float: right;
          width: 358px;
          margin-top: 35px
          .action-list
            margin: 0;
            padding: 0;
            list-style-type: none;
            color: #757575
            li
              position: relative;
              padding: 6px 0
      .portal-sub
        border-top: 1px solid #e0e0e0
        .info-list
          margin: 0;
          padding: 60px 0 0;
          list-style-type: none;
          color: #757575
          li
            position: relative;
            float: left;
            width: 276px;
            height: 65px;
            padding-left: 112px;
            padding-top: 15px;
            margin-left: 14px;
            margin-bottom: 80px
            h3
              margin-bottom : 10px;
              font-size: 18px;
              font-weight: 400
              .num
                color: #ff6700
            a
              .iconfont
                font-size: 16px;
                line-height: 16px;
                vertical-align: -1px
            img
              position: absolute;
              left: -10px;
              top: -10px
</style>      
