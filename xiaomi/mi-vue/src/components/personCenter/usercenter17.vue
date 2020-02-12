<template>
  <div>
    <div class="service-box service-main-box">
      <div class="service-content-box">
        <div class="box-hd">
          <h1 class="title">选择申请方式</h1>
        </div>
        <div class="box-bd">
          <ul class="service-choose-list clearfix">
            <li>
              <i class="icon icon-order"></i>
              <h3>快速申请</h3>
              <p>
                小米网 / 小米商城App购买的订单
                <br />支持通过订单快速申请
              </p>
              <router-link class="btn btn-line-green" to="">前往订单</router-link>
            </li>
            <li>
              <i class="icon icon-fill"></i>
              <h3>填写申请单</h3>
              <p>
                其他渠道购买的产品
                <br />根据产品唯一识别码和购买凭证申请售后
              </p>
              <router-link class="btn btn-line-green" to="">申请售后</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="service-box service-main-box" style="margin-top: 14px;">
      <div class="service-content-box">
        <div class="box-bd">
          查看新手指导说明？点击
          <router-link style="color: #ff6700;" to="">申请售后说明</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.service-main-box
  padding 36px 0
  background #fff
  .service-content-box
    margin 0 48px
    .box-hd
      .title
        margin: 0;
        font-size: 36px;
        font-weight: 400;
        line-height: 68px;
        color: #b0b0b0;
    .box-bd
      .service-choose-list
        margin: 40px 0;
        padding: 0;
        list-style-type: none;
        li
          float: left;
          width: 50%;
          text-align: center;
          .icon
            background-position 0 0
            display: block;
            width: 72px;
            height: 72px;
            margin: 0 auto 20px;
            background: url(https://service.order.mi.com/service/images/icons-choose-list.png) no-repeat 0 0;
          h3
            margin: 0 0 5px;
            font-size: 22px;
            font-weight: 400;
            color: #333;
          p
            margin: 0 0 15px;
            color: #757575;
            line-height: 22px;
          .btn
            display: inline-block;
            width: 158px;
            height: 38px;
            padding: 0;
            margin: 0;
            border: 1px solid #b0b0b0;
            font-size: 14px;
            line-height: 38px;
            text-align: center;
            color: #b0b0b0;
            cursor: pointer;
            -webkit-transition: all .4s;
            transition: all .4s;
          .btn-line-green
            border-color: #83c44e;
            background: #fff;
            color: #83c44e;
            &:hover
              color: #fff;
              background-color: #71b639;
              border-color: #71b639;
</style>
