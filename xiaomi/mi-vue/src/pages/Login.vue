<template>
  <div class="login">
    <div class="wrapper">
      <!-- loading -->
      <div class="popup_mask acquirePhoneMask" style="display:none;" id="loadingMask">
        <div class="bkc"></div>
        <div class="mod_wrap loadingmask"></div>
        <div class="loadingTips">正在检测你的帐号信息...</div>
      </div>
      <!--bg_banner_start-->
      <div class="bgiframe">
        <iframe name="ifr" style="height:100%" width="100%" height="686" src="https://s1.mi.com/loginbanner.html" id="bgiframe" frameborder="0" scrolling="no"></iframe>
      </div>
      <!--bg_banner_end-->
      <div class="wrap">
        <div class="layout_panel">
          <div class="layout" id="layout">
            <!--表单输入登录-->
            <div class="mainbox form-panel" id="login-main">
              <div id="custom_display_2">
                <router-link to="" class="ercode" id="qrcode-trigger" href="javascript:void(0)"></router-link>
              </div>
              <!-- header s -->
              <div class="lgnheader">
                <div class="header_tit t_c">
                  <em id="custom_display_1" class="milogo">
                    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700" />
                      <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
                      <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
                      <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF" />
                      <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF" />
                      <rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"/>
                      <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"/>
                      <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700" />
                      <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700" />
                      <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF" />
                    </svg>
                  </em>
                  <h4 class="header_tit_txt" id="login-title">小米帐号登录</h4>
                  <div class="site_info"></div>
                </div>
              </div>
              <!-- header e -->
              <!-- tab s -->
              <div class="nav_tabs_panel">
                <div id="nav-tabs" class="nav_tabs">
                  <router-link to="" 
                    class="navtab-link" 
                    :class="{'now': tab == '0'}" 
                    @click.native="changetab(0)" 
                    href="javascript:void(0);" 
                    data-tab="pwd">帐号登录</router-link>
                  <span class="line"></span>
                  <router-link to="" 
                    class="navtab-link" 
                    :class="{'now': tab == '1'}" 
                    @click.native="changetab(1)" 
                    href="javascript:void(0);" 
                    data-tab="qr">扫码登录</router-link>
                </div>
              </div>
              <!-- tab e -->
              <!-- tab con s -->
              <div class="tabs-con tabs_con now" data-con="pwd" :style="{display: tab == '0' ? 'block':'none'}">
                <div>
                  <div class="login_area">
                    <form action="/pass/serviceLoginAuth2" method="POST" id="login-main-form">
                      <div class="loginbox c_b">
                        <!-- 输入框 -->
                        <div class="lgn_inputbg c_b login-panel pwdLogin" :class="{'sms_login': typeNum == 1}">
                          <!--验证用户名-->
                          <div class="single_imgarea" id="account-info">
                            <div class="na-img-area" id="account-avator" style="display:none">
                              <div class="na-img-bg-area" id="account-avator-con"></div>
                            </div>
                            <p class="us_name tac" id="account-displayname"></p>
                            <p class="us_id tac"></p>
                          </div>
                          <label id="region-code" class="labelbox login_user c_b disable" for :class="[{'add_regioncode': typeNum == 1}, {'error_bg': errType == 0 || errType == 2}]">
                            <div class="turn_area">
                              <router-link to="" class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></router-link>
                            </div>
                            <div class="country_list">
                              <div class="animation countrycode_selector" id="countrycode_selector">
                                <span class="country_code">
                                  <tt class="countrycode-value" id="countrycode_value">+86</tt>
                                  <i class="icon_arrow_down"></i>
                                </span>
                              </div>
                            </div>
                            <input class="item_account" 
                              autocomplete="off" 
                              :type="typeNum == 0? 'text': 'number'" 
                              name="user" id="username" 
                              :placeholder="typeNum == 0 ? '邮箱/手机号码/昵称': '手机号码'"
                              v-model="message"
                              />
                            <input type="hidden" name="log" id="debug_log" /><!-- 用于存放数据，form表单提交时会把这个值也提交至后台 -->
                          </label>
                          <div class="country-container" id="countrycode_container" style="display: none;">
                            <div class="country_container_con" id="countrycode_container_con"></div>
                          </div>
                          <label class="labelbox pwd_panel c_b" :class="{'error_bg': errType == 1}">
                            <input class="item_account" 
                              :type="typeNum == 0? 'password': 'number'" 
                              :placeholder="typeNum == 0? '密码': '短信验证码'" 
                              autocomplete="off" 
                              id="pwd" name="password"
                              v-model="password"
                              />
                            <input 
                              class="item_account" 
                              type="text" 
                              placeholder="密码" 
                              autocomplete="off" 
                              id="visiablePwd" 
                              name="visiablepwd" 
                              style="display:none"
                              />
                            <div class="eye_panel pwd-visiable">
                              <i class="eye pwd-eye">
                                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                  <path class="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z"/>
                                  <circle class="eye_inner" cx="10" cy="8" r="3" />
                                </svg>
                              </i>
                            </div>
                            <div id="sms-code-panel" class="code_panel" :style="{display: typeNum == 0? '': 'block'}">
                              <router-link to="" class="send_ticket" href="javascript:;" id="getSMSCode">获取验证码</router-link>
                            </div>
                          </label>
                        </div>
                        <div class="security_Controller" style="display: none;">
                          <label class="checkbox_area">
                            <input type="checkbox" id="trustSecurityController" class="checkbox" />使用安全控件
                          </label>
                        </div>
                        <div id="captcha"></div>
                        <!-- 错误信息 -->
                        <div class="err_tip" :style="{display: errType == 0 || errType == 1 || errType == 2? 'block': 'none'}">
                          <div>
                            <em class="icon_error"></em>
                            <span class="error-con">{{errTypeText[errType]}}</span>
                          </div>
                        </div>
                        <div class="btns_bg" @click="login">
                          <input class="btnadpt" id="login-button" type="button" :value="typeNum == 0? '登录': '立即登录/注册'" />
                          <span id="custom_display_8" class="sns-default-container sns_default_container" style="display: none;"></span>
                        </div>
                        <div class="other_panel clearfix">
                          <span id="custom_display_256" class="sms_link">
                            <router-link to="" 
                              href="javascript:;" 
                              class="btnadpt btn_gray login_type_link" 
                              id="ChangeLoginType" 
                              @click.native="changeType">{{type[typeNum]}}</router-link>
                          </span>
                          <div class="reverse">
                            <div class="n_links_area" id="custom_display_64" :style="{display: typeNum == 0? 'block': 'none'}">
                              <router-link to="./Register" class="outer-link" href="">立即注册</router-link>
                              <span>|</span>
                              <router-link to="" class="outer-link" href="">忘记密码？</router-link>
                            </div>
                          </div>
                          <!-- 其他登录方式 s -->
                          <div style="display: block;" class="other_login_type sns-login-container" id="custom_display_16">
                            <fieldset class="oth_type_tit">
                              <legend align="center" class="oth_type_txt">其他方式登录</legend>
                            </fieldset>
                            <div id="sns-login-links" class="oth_type_links">
                              <router-link to=""
                                class="icon_type btn_qq sns-login-link"
                                data-type="qq"
                                href=""
                                title="QQ登录"
                              >
                                <i class="btn_sns_icontype icon_default_qq"></i>
                              </router-link>
                              <router-link to=""
                                class="icon_type btn_weibo sns-login-link"
                                data-type="weibo"
                                href=""
                                title="微博登录"
                              >
                                <i class="btn_sns_icontype icon_default_weibo"></i>
                              </router-link>
                              <router-link to=""
                                class="icon_type btn_alipay sns-login-link"
                                data-type="alipay"
                                href=""
                                title="支付宝登录"
                              >
                                <i class="btn_sns_icontype icon_default_alipay"></i>
                              </router-link>
                              <router-link to=""
                                class="icon_type btn_weixin sns-login-link"
                                data-type="weixin"
                                href=""
                                title="微信登录"
                              >
                                <i class="btn_sns_icontype icon_default_weixin"></i>
                              </router-link>
                            </div>
                          </div>
                          <!-- 其他登录方式 e -->
                          <p class="acq_tips" style="display: none;"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tabs-con tabs_con" data-con="qr" :style="{display: tab == '0' ? 'none':'block'}"></div>
              <!-- tab con e -->
            </div>
            <div class="ercode_area" id="login-qrcode" style="height: 474px; width: 410px;" :style="{display: tab == '0' ? 'none':'block'}">
              <div class="ercode_pannel">
                <router-link to="" class="code_close" href="javascript:void(0)" title="关闭" id="qrcode-close">
                  <span class="icon_code_close"></span>
                </router-link>
                <div class="ercode_box">
                  <div class="code_hd">
                    <h3 class="code_tit">小米帐号扫码登录</h3>
                    <p>请打开「设置 &gt; 小米帐号 &gt; 右上角扫一扫」扫码登录</p>
                  </div>
                  <div class="code_iframe">
                    <iframe
                      style="background:#fff; height:180px; width:180px;"
                      src="https://c3.lp.account.xiaomi.com/static/res/34f7ae4/account-static/html/login/dist/qrlogin/passlp-cn.html?callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%26sign%3DNzY3MDk1YzczNmUwMGM4ODAxOWE0NjRiNTU5ZGQyMzFhYjFmOGU0Nw%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180&_qrsize=180&_=1573953581356"
                      id="qriframe"
                      frameborder="0"
                      scrolling="no"
                      sandbox="allow-scripts allow-same-origin allow-top-navigation allow-modals"
                    ></iframe>
                  </div>
                  <div class="custom_sub_txt">
                    <p id="custom-qr-name">
                      使用
                      <span>小米商城APP</span>扫一扫
                    </p>
                    <p>小米手机可打开「设置」&gt;「小米帐号」扫码登录</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 取号注册 -->
            <div id="ac-register" class="tac mode_panel form-panel" style="display: none">
              <h1>注册小米帐号</h1>
              <div class="box">
                <img
                  src="https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/sim.png"
                  alt="sim card"
                  width="70"
                  height="70"
                />
                <p>
                  手机号：
                  <span class="maskedPhone"></span>
                </p>
              </div>
              <div class="err_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span class="error-con"></span>
                </div>
              </div>
              <div class="fixed_bot dis_box">
                <router-link to="" href="javascript:;" class="btnadpt plain ok_btn">一键注册</router-link>
                <router-link to="" href="javascript:;" class="btnadpt plain no_btn btn_gray">登录其他帐号</router-link>
              </div>
              <p class="acq_tips" style="display: none">取号来源于中国移动</p>
              <p class="agreeTip">
                <i class="icon_select icon_true"></i>同意小米的
                <router-link to="" href="/about/protocol/agreement" class="agreement_link">用户协议</router-link>和
                <router-link to="" href="/about/protocol/privacy" class="privacy_link">隐私政策</router-link>
              </p>
            </div>
            <!-- 回收号确认 -->
            <div id="ac-confirm" class="tac mode_panel form-panel" style="display: none">
              <div>
                <div class="box">
                  <div class="na-img-area">
                    <div class="na-img-bg-area us-portraitUrl"></div>
                  </div>
                  <div class="confirm_tips">
                    <p class="us_name us-userName">
                      昵称：
                      <span class="usernameShow"></span>
                    </p>
                    <p>
                      小米ID：
                      <span class="useridShow"></span>
                    </p>
                    <!-- <p>注册时间：<span class="userRegisterDateShow"></span></p>                              <p>注册设备：<span class="userRegisterDeviceShow"></span></p>                              <p>注册来源：<span class="userRegisterOriginShow"></span></p>                              <p>手机号：<span class="userPhoneShow"></span></p> -->
                  </div>
                </div>
                <h2>这是你的帐号吗？</h2>
                <div class="recycle">
                  <p>
                    <span class="user-phone"></span>疑似是运营商回收后再次售卖的号码，该号码下已有小米帐号，这个帐号是你的吗？
                  </p>
                  <p class="color_warning">如果使用非本人注册的帐号，部分功能可能会受限制。</p>
                </div>
              </div>
              <div class="err_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span class="error-con"></span>
                </div>
              </div>
              <div class="fixed_bot dis_box">
                <router-link to="" href="javascript:;" class="btnadpt plain ok_btn">继续登录</router-link>
                <router-link to="" href="javascript:;" class="btnadpt plain no_btn">注册新帐号</router-link>
              </div>
              <p class="acq_tips" style="display: none">取号来源于中国移动</p>
              <p class="ptb30 btn_alink_box">
                <router-link to="" href="javascript:;" class="back_btn blue">登录其他帐号</router-link>
              </p>
            </div>
            <div id="set-pwd" class="mode_panel set_pwd_panel form-panel">
              <h4>请设置您的密码：</h4>
              <label class="labelbox c_b">
                <input
                  class="item_account set-password re-password"
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                />
              </label>
              <label class="labelbox c_b">
                <input
                  class="item_account set-password"
                  name="repassword"
                  type="password"
                  placeholder="请输入确认密码"
                />
              </label>
              <div class="err_tip pwd_tip">
                <div class="dis_box">
                  <em class="icon_error"></em>
                  <span
                    class="error-con"
                    data-origin="密码长度8~16位，数字、字母、字符至少包含两种"
                  >密码长度8~16位，数字、字母、字符至少包含两种</span>
                </div>
              </div>
              <div class="btns_bg">
                <router-link to="" id="register-button" class="btnadpt" >立即注册</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="custom_display_4" class="n-footer">
      <div class="nf-link-area clearfix">
        <ul class="lang-select-list">
          <li>
            <router-link to="" href="javascript:void(0)" data-lang="zh_CN" class="lang-select-li current">简体</router-link>|
          </li>
          <li>
            <router-link to=""
              href=""
              data-lang="zh_TW"
              class="lang-select-li"
            >繁体</router-link>|
          </li>
          <li>
            <router-link to=""
              href=""
              data-lang="en"
              class="lang-select-li"
            >English</router-link>|
          </li>
          <li>
            <router-link to="" href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank">常见问题</router-link>|
          </li>
          <li>
            <router-link to="" id="msg-privacy" href="" target="_blank">隐私政策</router-link>
          </li>
        </ul>
      </div>
      <p class="nf-intro">
        小米公司版权所有-京ICP备10046444-
        <router-link to=""
          class="beian-record-link"
          target="_blank"
          href=""
        >
          <span>
            <img
              src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
            />
          </span>京公网安备11010802020134号
        </router-link>-京ICP证110507号
      </p>
    </div>
    <div class="modal_container" style="display: none;">
      <div class="modal_msk"></div>
      <div
        class="modal_tip mod_acc_tip security-controller-modal"
        id="modal-id-0"
        style="display: none;"
      >
        <div class="modal_tip_flex">
          <div class="modal_tip_hd modal-header">
            <div class="external_logo_area">
              <router-link to="" class="milogo" href="javascript:void(0)"></router-link>
            </div>
            <div class="modal-header-text modal_tip_title">提示</div>
            <router-link to="" href="javascript:void(0)" title class="modal-header-close btn_mod_close">
              <span>关闭</span>
            </router-link>
          </div>
          <div class="modal_tip_bd modal-body">
            <div id="sect-controller-panel" class="security_controller_panel">
              <h4>您需要安装安全控件，才可使用安全登录。</h4>
              <p>控件可对您的密码进行加密保护，提升账户安全性。</p>
              <p>请点击“立即安装控件”按钮，并根据提示进行安装。</p>
              <div class="tip_msg">完成安装后，请重新启动浏览器</div>
            </div>
            <div class="tip_btns">
              <router-link to=""
                title="立即安装控件"
                href="https://account.xiaomi.com/static/res/0369340/account-static/static/mipay/XiaomiCtrl.exe"
                class="btn_tip btn_commom btn-action-controller"
              >立即安装控件</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      tab: 0,
      typeNum: 0,
      type: ['手机短信登录/注册', '用户名密码登录'],
      message: '',
      password: '',
      computeTime: 0,
      timer: null,
      errType: 3,
      errTypeText: ['用户名或密码错误', '请输入密码', '请输入账号'],
      nextPath: '',
      beforePath: ''
    }
  },
  created() {
    this.nextPath = this.$route.query.redirect // 把拦截的页面路由信息拿到
    console.log(this.nextPath)
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.beforePath = from.path
    })
  },
  methods: {
    ...mapMutations(['changeLogin']),
    changetab (index) {
      this.tab = index
    },
    changeType () {
      if (this.typeNum == 0) this.typeNum = 1
      else this.typeNum = 0
    },
    login () {
      let _this = this
      if (this.message.trim() === '') { // trim()去空格
        // Message('账号或密码不能为空')
        this.errType = 2
      } else if (this.password.trim() === '') {
        this.errType = 1
      }else {
        this.$http({
        url: 'http://localhost:3000/users/userLogin',
        method: 'post',
        data: {
          message: this.message.trim(),
          password: this.password.trim()
        }
      }).then((res) => {
        if (res.data.code === '800000') {
          console.log('登录成功', res)
          let userToken = 'Bearer' + res.data.token
          _this.changeLogin({Authorization: userToken})
          if (_this.nextPath) {
            _this.$router.push(_this.nextPath)
          } else {
            // _this.$router.push(_this.beforePath)
            _this.$router.push('/')
          }
          Message({
            message: '登录成功',
            center: true,
            offset: 300,
            duration: 1000,
            type: "success"
          })
          // _this.$store.dispatch('setIsLogin', true)
          _this.$store.dispatch('setShowAgreement', false)
          _this.$store.dispatch('setShowMask', false)
          localStorage.setItem('userInfo', JSON.stringify(res.data.data)) // 存到本地内存中
        } else {
          // Message(res.data.mess)
          _this.errType = 0
        }
      }).catch((err) => {
        console.log(err)
      })
      }  
    },
    rightPhone () {
      return /^1[3456789]\d{9}$/.test(this.phone)
    },
    getCode(){
      if(!this.computeTime) {
        this.computeTime = 60;
        this.timer = setInterval(() => {
            this.computeTime --;
            if( this.computeTime <= 0){
              clearInterval(this.timer)
            }
        }, 1000);
      }
    }
  }
}
</script>

<style scoped>
@import "../style/css/login.css";
</style>
