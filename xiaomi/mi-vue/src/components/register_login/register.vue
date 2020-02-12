<template>
  <transition name="dialog-fade">
    <div class="mi-dialog__wrapper" style="width: 800px" v-if="isShowAgreement">
      <div class="mi-dialog">
        <div class="mi-dialog__header">
          <span class="mi-dialog__title">协议声明</span>
        </div>
        <router-link to="" class="mi-dialog__headerbtn" @click.native="hideAgreement">
          <i class="iconfont icon-icons-btn-cancel"></i>
        </router-link>
        <div class="mi-dialog__body">
          <div class="mi-dialog__inner">
            <div>
              <div class="desc">
                <span class="agree-tab" @click="changeSrc(0)">《小米商城用户协议》</span>
                、
                <span class="agree-tab" @click="changeSrc(1)">《小米商城隐私政策》</span>
                、
                <span class="agree-tab" @click="changeSrc(2)">《小米帐号用户协议》</span>
                、
                <span class="agree-tab" @click="changeSrc(3)">《小米帐号隐私政策》</span>
                请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件
              </div>
              <div class="con">
                <iframe id="agreementContentIframe" width="100%" height="300px" frameborder="0" scrolling=auto :src="url[id]" ref="iframe"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="el-dialog__footer">
          <button class="btn btn-primary" @click="register">同意</button>
          <button class="btn btn-gray" @click="hideAgreement">不同意</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      url: [
        '../../../static/Agreement0.html',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html',
        'https://static.account.xiaomi.com/html/agreement/account/cn.html',
        'https://static.account.xiaomi.com/html/privacy/account/zh_CN.html'
      ],
      id: 0
    }
  },
  
  methods: {
    hideAgreement () {
      this.$store.dispatch('setShowAgreement', false)
      this.$store.dispatch('setShowMask', false)
    },
    register () {
      this.$router.push({ path:'/register' })
    },
    changeSrc (index) {
      let iframe = this.$refs.iframe
      this.id = index
    }
  },
  computed: {
    ...mapGetters([
      'isShowAgreement'
    ])
  }
}
</script>

<style scoped lang="stylus">
.mi-dialog__wrapper
  position fixed
  bottom 50%
  left 50%
  -webkit-transform translate(-50%,50%)
  -ms-transform translate(-50%,50%)
  transform translate(-50%,50%)
  background #fff
  border-radius 2px
  -webkit-box-shadow 0 1px 3px rgba(0,0,0,.3)
  box-shadow 0 1px 3px rgba(0,0,0,.3)
  -webkit-box-sizing border-box
  box-sizing border-box
  overflow hidden
  z-index 1001
  .mi-dialog
    position relative
    .mi-dialog__header
      position relative
      height 32px
      padding 14px 20px
      line-height 32px
      background-color #f5f5f5
      .mi-dialog__title
        font-size 18px
        font-weight 400
        color #424242
        vertical-align middle
    .mi-dialog__headerbtn
      position absolute
      right 14px
      top 14px
      display inline-block
      width 30px
      height 30px
      line-height 30px
      text-align center
      color #757575
      cursor pointer
      -webkit-transition all .2s
      transition all .2s
      z-index 1001
      border-radius 15px
      &:hover
        color #fff
        background-color #e53935
      .iconfont
        vertical-align middle
        font-size 24px
        font-weight 200
    .mi-dialog__body    
      padding 20px
      .desc
        margin-left 20px
        margin-bottom 20px
        font-size 14px
        height 41.6px
        line-height 20.8px
        span
          color $hover_color
          cursor pointer
          font-size 14px
          
      .con
        min-height 300px
        overflow hidden
        font-size 14px
        line-height 24px
        text-align left
        iframe
          border none
    .el-dialog__footer
      height 80px
      padding 20px 0
      border-top 1px solid #e0e0e0
      text-align center
      background-color #f5f5f5
      button
        width 160px
        height 40px
      .btn
        margin 0 7px
      .btn-primary
        background #ff6700
        border 1px solid #ff6700
        color #fff
        &:hover
          background-color #f25807
          border-color #f25807
          color #fff
      .btn-gray
        background #b0b0b0
        border 1px solid #b0b0b0
        color #fff
        &:hover
          background-color #757575
          border-color #757575
          color #fff
</style>
