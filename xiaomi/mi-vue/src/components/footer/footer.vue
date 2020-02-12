<template>
  <div>
    <div class="site-footer">
      <div class="container">
        <div class="footer-service">
          <ul class="list-service clearfix">
            <li v-for="(footertitle, index) in footerTitle" :key="index">
              <router-link to="/">
                <i class="iconfont" :class="footertitle.iconClass"></i>
                {{footertitle.title}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-links clearfix">
          <dl class="col-links col-links-first" v-for="(mtitle, index) in Mtitle" :key="index">
            <dt>{{mtitle.title}}</dt>
            <dd v-for="(stitle, index) in mtitle.stitle" :key="index">
              <router-link to="/">{{stitle.title}}</router-link>
            </dd>
          </dl>
          <div class="col-contact">
            <p class="phone">400-100-5678</p>
            <p>
              周一至周日 8:00-18:00
              <br>
              (仅收市话费)
            </p>
            <router-link to="/" class="btn btn-line-primary btn-small">
              <i class="iconfont icon-duanxin"></i>
              人工客服
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="site-info">
      <div class="container">
        <div class="logo ir">小米官网</div>
        <div class="info-text">
          <p class="sites">
            <router-link to="/">小米商城</router-link>
            <span class="sep">|</span>
            <router-link to="/">MIUI</router-link>
            <span class="sep">|</span>
            <router-link to="/">米家</router-link>
            <span class="sep">|</span>
            <router-link to="/">米聊</router-link>
            <span class="sep">|</span>
            <router-link to="/">多看</router-link>
            <span class="sep">|</span>
            <router-link to="/">游戏</router-link>
            <span class="sep">|</span>
            <router-link to="/">路由器</router-link>
            <span class="sep">|</span>
            <router-link to="/">米粉卡</router-link>
            <span class="sep">|</span>
            <router-link to="/">政策服务</router-link>
            <span class="sep">|</span>
            <router-link to="/">小米天猫卡</router-link>
            <span class="sep">|</span>
            <router-link to="/">小米集团隐私政策</router-link>
            <span class="sep">|</span>
            <router-link to="/">小米公司儿童信息保护规则</router-link>
            <span class="sep">|</span>
            <router-link to="/">小米商城隐私政策</router-link>
            <span class="sep">|</span>
            <router-link to="/">小米商城用户协议</router-link>
            <span class="sep">|</span>
            <router-link to="/">问题反馈</router-link>
            <span class="sep">|</span>
            <router-link to="/">廉政举报</router-link>
            <span class="sep">|</span>
            <router-link to="/">诚信合规</router-link>
            <span class="sep">|</span>
            <router-link to="/">Select Location</router-link>
          </p>
          <p>
            ©
            <router-link to="">mi.com</router-link>
            京ICP证110507号
            <router-link to="">京ICP备10046444号</router-link>
            <router-link to="">京公网安备11010802020134号</router-link>
            <router-link to="">京网文[2017]1530-131号</router-link>
            <router-link to="">（京）网械平台备字（2018）第00005号</router-link>
            <router-link to="">互联网药品信息服务资格证 (京) -非经营性-2014-0090</router-link>
            <router-link to="">营业执照</router-link>
            <router-link to="">医疗器械公告</router-link>
            <router-link to="">增值电信业务许可证</router-link>
            &nbsp;网络食品经营备案（京）【2018】WLSPJYBAHF-12  &nbsp;
            <router-link to="">食品经营许可证</router-link>
            <br>
            违法和不良信息举报电话：185-0130-1238
            <router-link to="">知识产权侵权投诉</router-link>
            本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
          </p>
        </div>
        <div class="info-links">
          <router-link to="/" v-for="(bimage, index) in bimg" :key="index">
            <img :src="bimage.imgUrl" alt="">
          </router-link>
        </div>
      </div>
      <div class="slogan ir">刚半年</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerTitle: [],
      Mtitle: [],
      bimg: []
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/footer.json').then(res => {
      this.footerTitle = res.data.footerTitle
      this.Mtitle = res.data.Mtitle
      this.bimg = res.data.bimg
    })
  }
}
</script>

<style scoped lang="stylus">
.site-footer
  .footer-service
    padding 27px 0
    border-bottom 1px solid $border_color
    .list-service
      margin 0
      padding 0
      list-style-type none
      li
        float left
        width 19.8%
        height 25px
        border-left 1px solid $border_color
        font-size 16px
        line-height 25px
        text-align center
        &:first-child
          border-left 0
        a
          color #616161
          -webkit-transition color .2s
          transition color .2s
          &:hover
            color $hover_color
          i[class*=iconfont]
            margin-right 6px
            font-size 24px
            line-height 24px
            vertical-align -4px
  .footer-links
    padding 40px 0
    .col-links
      float left
      width 160px
      height 112px
      margin 0
      dt
        margin -1px 0 26px
        font-size 14px
        line-height 1.25
        color $bg_color
      dd
        margin 10px 0 0
        font-size 12px
        a
          color #757575
          &:hover
            color $hover_color
    .col-contact
      float right
      width 251px
      height 112px
      border-left 1px solid $border_color
      text-align center
      color #616161
      p
        margin 0 0 16px
        font-size 12px
      .phone
        margin 0 0 5px
        font-size 22px
        line-height 1
        color $hover_color
      .btn
        display inline-block
        width 158px
        height 38px
        padding 0
        margin 0
        border 1px solid $font_color
        font-size 14px
        line-height 38px
        text-align center
        color $font_color
        cursor pointer
        -webkit-transition all .4s
        transition all .4s
      .btn-line-primary
        border-color $hover_color
        background #fff
        color $hover_color
        &:hover
          color #fff
          background-color #f25807
          border-color #f25807
      .btn-small
        width 118px
        height 28px
        font-size 12px
        line-height 28px
.site-info
  padding 30px 0
  font-size 12px
  background #fafafa
  .container
    position relative
    .logo
      width 57px
      height 57px
      margin-right 10px
      background url(https://s02.mifile.cn/assets/static/image/logo-footer.png) no-repeat 50% 50%
      position absolute
      top 0
      left 0
    .info-text
      color $font_color
      padding-left 67px
      a
        color $font_color
        &:hover
          color $hover_color
      p
        margin 0
        line-height 18px
      .sites
        a
          color #757575
          &:hover
            color $hover_color
        .sep
          margin 0
    .info-links
      height 28px
      margin 4px 0 0
      padding-left 67px
      img
        width auto
        height 28px
        margin-left 0
        margin-bottom 15px
  .slogan
    clear both
    margin 30px auto 0
    width 267px
    height 19px
    background url(https://s02.mifile.cn/assets/static/image/slogan2016.png) no-repeat center 0
</style>
