<template>
  <div class="zh_CN">
    <div class="wrapper">
      <div class="wrap">
        <div class="layout">
          <div class="n-frame device-frame">
            <div class="external_logo_area">
              <router-link to="" class="milogo"></router-link>
            </div>
            <div class="title-item">
              <h4 class="title_big30">注册小米账号</h4>
            </div>
            <div>
              <div class="regbox">
                <div class="phone_step1">
                  <el-form ref="form" :model="form" label-width="50px">
                    <el-form-item label="昵称:">
                      <el-input v-model="form.nickname" placeholder="昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱:">
                      <el-input v-model="form.mail" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:">
                      <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
                    </el-form-item>
                  </el-form>
                  <h4 class="tit_normal">手机号码</h4>
                  <div class="listwrap_inside_panel c_b">
                    <div class="listwrap">
                      <div class="listtit">
                        <div class="tits">
                          <p>+86</p>
                          <i class="icon_arrow"></i>
                        </div>
                      </div>
                    </div>
                    <div class="inputbg">
                      <input type="hidden" name="region" class="select-regions-input">
                      <label for="" class="labelbox ">
                        <input type="tel" name="phone" placeholder="请输入手机号码" v-model="phone">
                      </label>
                    </div>
                    <div class="err_tip" :style="{display: errType != undefined ? 'block': 'none'}">
                      <div class="dis_box">
                        <em class="icon_error"></em>
                        <span>{{err[errType]}}</span>
                      </div>
                  </div>
                  </div>
                  <div class="fixed_bot" @click="toRegister">
                    <input type="submit" class="btn332 btn_reg_1" value="立即注册">
                  </div>
                </div>
              </div>
              <div class="privacy_box">
                <div class="msg">
                  <label for="" class="n_checked ">
                    已阅读并同意：小米
                    <router-link class="inspect_link" to="">用户协议</router-link>
                    和
                    <router-link class="inspect_link" to="">隐私政策</router-link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="n-footer">
      <div class="nf-link-area clearfix">
        <ul class="lang-select-list">
          <li>
            <router-link to="" class="lang-select-li current">简体</router-link>
            |
          </li>
          <li>
            <router-link to="" class="lang-select-li">繁体</router-link>
            |
          </li>
          <li>
            <router-link to="" class="lang-select-li">English</router-link>
            |
          </li>
          <li>
            <router-link to="" class="a_critical">常见问题</router-link>
          </li>
        </ul>
      </div>
      <p class="nf-intro">
        <span>
          小米公司版权所有-京ICP备10046444-
          <router-link to="" class="beianlink">
            <span>
              <img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png" alt="">
            </span>
            京公网安备11010802020134号
          </router-link>
          -京ICP证110507号
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data () {
    return {
      phone: '',
      errType: 3,
      err: ['请输入手机号码', '手机号已经存在', '请输入正确的手机号', '请输入昵称', '请输入邮箱', '请输入正确的邮箱', '请输入密码', '密码至少6个字符，至少1个大写字母，1个小写字母和1个数字,不能包含特殊字符'],
      form: {
        nickname: '',
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    toRegister () {
      if (this.phone.trim() === '') {
        console.log('手机号不能为空')
        this.errType = 0
        return
      } else if (this.form.nickname.trim() === '') {
        this.errType = 3
      } else if (this.form.mail.trim() === '') {
        this.errType = 4
      } else if (this.form.password.trim() === '') {
        this.errType = 6
      } else if (/^1[3456789]\d{9}$/.test(this.phone) == false) {
        console.log('手机号错误')
        this.errType = 2
      } else if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.form.mail) == false) {
        this.errType = 5
      } else if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.form.password) == false) {
        this.errType = 7
      } else {
        this.$http({
        url: 'http://localhost:3000/users/userRegister',
        method: 'post',
        data: {
          phone: this.phone.trim(),
          nickname: this.form.nickname.trim(),
          mail: this.form.mail.trim(),
          password: this.form.password.trim()
        }
      }).then(res => {
        if (res.data.code === '800000') {
          Message({
            message: '注册成功',
            center: true,
            offset: 300,
            duration: 1000,
            type: "success"
          })
          this.$router.push({ path: '/Login' })
            console.log('注册成功', res)
          } else if (res.data.code === '800003') { // 已经注册了
            this.errType = 1
          }
          else {
            console.log('注册失败', res)
          }
          }).catch(err => {
          console.log(err)
        })
      }
    } 
  }
}
</script>

<style scoped lang="stylus">
.zh_CN
  overflow-y auto
  .wrapper
    width 100%
    min-height 100%
    height auto
    display -webkit-box
    background-color #F9F9F9
    -webkit-box-align center
    -webkit-box-pack center
    .wrap
      padding-bottom 80px
      margin 0 auto
      margin-top 40px
      .layout
        width 854px
        margin 0 auto
        padding-bottom 10px
        .device-frame
          padding-bottom 30px
          padding-top 0
        .n-frame
          background #fff
          min-height 400px
          .external_logo_area
            padding-bottom 40px
            display block
            .milogo
              width 49px
              height 48px
              margin 0 auto
              display block
              cursor default
              background-image url(https://account.xiaomi.com/static/res/28f08d0/account-static/respassport/acc-2014/img/milogo.png)
          .title-item
            border-bottom none
            padding-bottom 0
            margin-bottom 0
            text-align center
            clear both
            .title_big30
              font-size 30px
              font-weight normal
              color #333
              line-height 1.5
          .regbox
            width 332px
            padding 30px 0
            line-height 20px
            margin 0 auto
            .tit_normal
              padding-bottom 5px
              color #333
              font-weight normal
              font-size 14px
            .listwrap
              padding-bottom 15px
              position relative
              .tits
                height 40px
                padding-left 14px
                line-height 40px
                display inline-block
                vertical-align middle
                border 1px solid #e8e8e8
                color #555
                cursor pointer
                zoom 1
                p
                  float left
                  width 275px
                  border-right 1px solid #e8e8e8
                  cursor pointer
                .icon_cirarr
                  float right
                  background url(https://account.xiaomi.com/static/res/0eeaaed/passport/oauth/images/icon_user.png)
                  width 16px
                  height 16px
                  margin 11px 12px 0 12px
            .region_tip_text
              margin-top -10px
              margin-bottom 15px
              .tit_normal
                padding-bottom 5px
                color #333
                font-weight normal
            .listwrap_inside_panel
              zoom 1
              .listwrap
                float left
                padding-bottom 15px
                position relative
                .listtit
                  .tits
                    width 54px
                    text-align center
                    padding 0 9px
                    height 40px
                    line-height 40px
                    display inline-block
                    vertical-align middle
                    border 1px solid #e8e8e8
                    color #555
                    cursor pointer
                    zoom 1
                    p
                      width auto
                      border-right 0 none
                      float left
                      cursor pointer
                    .icon_arrow
                      float left
                      margin 17px 0 0 10px
                      width 0
                      height 0
                      line-height 0
                      font-size 0
                      border-width 5px
                      border-style solid
                      border-color #9d9d9d transparent transparent transparent
              .inputbg        
                float left
                padding-bottom 15px
                .err_label
                  border 1px solid #f66!important
                .labelbox
                  display inline-block
                  margin-left -1px
                  position relative
                  z-index 3
                  border 1px solid #e8e8e8
                  outline 0 none
                  input
                    width 236px
                    height 20px
                    line-height 20px
                    padding 10px
                    display inline-block
                    color #333
                    border 0 none
              .err_tip
                margin-bottom 5px
                line-height 20px
                color #ff6700
                display none
                .icon_error
                  width 14px
                  height 14px
                  margin -1px 5px 0 0
                  overflow hidden
                  display inline-block
                  vertical-align middle
                  background url(https://account.xiaomi.com/static/res/f234829/account-static/respassport/acc-2014/img/sprite_login.gif) no-repeat
                  background-position 0 -69px
                span
                  vertical-align middle
            .fixed_bot
              .btn_reg_1
                background-color $hover_color
                margin-top 15px
                border 1px solid rgba(186, 186, 186, 0.3)
                color #fff
                outline 0
              .btn332
                width 330px
                height 42px
                margin 0 auto
                line-height 42px
                text-align center
                font-size 14px
                display block
                cursor pointer
                overflow hidden
          .privacy_box
            text-align center
            padding-top 40px
            .msg
              color #9d9d9d
              .n_checked
                padding 10px 0
                cursor pointer
                display inline-block
                outline 0 none
                a
                  color #333
                  font-weight 1000
  .n-footer
    color #9d9d9d
    text-align center
    height 80px
    margin-top -10px
    .nf-link-area
      text-align center
      li
        display inline-block
        list-style none
        a
          display inline-block
          padding 0 10px
          color #757575
        .current
          color #333
    .nf-intro
      padding 10px
      .beianlink
        color #9d9d9d
</style>
