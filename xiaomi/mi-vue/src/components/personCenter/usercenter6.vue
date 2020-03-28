<template>
  <div class="uc-box uc-main-box">
    <div class="uc-content-box portal-content-box">
      <div class="box-bd">
        <div class="portal-main clearfix">
          <div class="user-card">
            <h2 class="username">{{nickname}}</h2>
            <p class="tip">{{nowTime}}～</p>
            <div class="link" @click.stop="uploadHeadImg">修改头像</div>
            <img
              class="avatar"
              :src="avatar"
              width="150"
              height="150"
            />
            <input ref="input" type="file" accept="image/*" @change="handleFile" style="display:none"/>
          </div>
          <div class="user-actions">
            <ul class="action-list">
              <li>
                账户安全：
                <span class="level level-3">{{password}}</span>
              </li>
              <li>
                绑定手机：
                <span class="tel">{{phone}}</span>
              </li>

              <li>
                绑定邮箱：
                <span class="tel">{{mail}}</span>
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
              <router-link to>
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
              <router-link to>
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
              <router-link to>
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
              <router-link to>
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
export default {
  data() {
    return {
      userInfo: {
        nickname: '',
        mail: '',
        phone: '',
        password: '',
        avatar: ''
      },
      nowTime: ''
    }
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(this.userInfo)
    let userTimer = setInterval(() => {
      this.nowtime()
    })
  },
  destroyed () {
    clearInterval(this.userTimer)
  },
  computed: {
    phone() {
      return this.hideStar(this.userInfo.phone)
    },
    mail() {
      return this.hideStar(this.userInfo.mail)
    },
    password() {
      return this.detailpwd(this.userInfo.password)
    },
    nickname() {
      return this.userInfo.nickname
    },
    avatar() {
      return this.base64ImgtoFile(this.userInfo.avatar)
    }
  },
  methods: {
    hideStar($str) {
      if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($str) == true) { // 邮箱
        const arr = $str.split('@')
        let star = ''
        if (arr[0].length <= 3) {
          star = '*'
          arr[0] = arr[0].substr(0, arr[0].length - 1) + star
        } else {
          arr[0] = arr[0].replace(/^(\d{2})\d{7}(\d+)/, "$1*******$2")
        }
        arr[1] = arr[1].replace(/^(\d{1})\d{1}(\d+)/, "$1*$2")
        return $str = arr[0] + '@' + arr[1]
      } else if (/^1[3456789]\d{9}$/.test($str) == true) { // 手机
        return $str.replace(/^(\d{3})\d{6}(\d+)/, "$1******$2")
      }
    },
    // 判断密码等级
    detailpwd(pwd) {
      const reg1 = /[a-z]/
      const reg2 = /[A-Z]/
      const reg3 = /\d/
      if (reg1.test(pwd) && reg2.test(pwd) && reg3.test(pwd) && pwd.length > 12) {
        return '高'
      }
      if (reg1.test(pwd) && reg2.test(pwd) && reg3.test(pwd) && pwd.length <= 12) {
        return '较高'
      }
      if (reg1.test(pwd) || reg2.test(pwd) || reg3.test(pwd)) {
        return '中等'
      }
    },
    nowtime() {
      let now = new Date()
      let hour = now.getHours()
      if(hour < 6){ this.nowTime = "凌晨好" } 
      else if (hour < 8){ this.nowTime = "早上好" }
      else if (hour < 12){ this.nowTime = "上午好" } 
      else if (hour < 13){ this.nowTime = "中午好" } 
      else if (hour < 18){ this.nowTime = "下午好" } 
      else { this.nowTime = "晚上好" }
    },
    uploadHeadImg() {
      this.$refs.input.click()
    },
    handleFile(e) {
      let target = e.target || e.srcElement
      let file = target.files[0]
      let reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    // Base64编码转换图片
    base64ImgtoFile(dataurl, filename = 'file') {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let suffix = mime.split('/')[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], `${filename}.${suffix}`, {
        type: mime
      })
    }
  },
  watch: {
    // avatar(newValue) {
    //   this.base64ImgtoFile(this.userInfo.avatar)
    // }
  }
};
</script>

<style scoped lang="stylus">
.uc-box {
  background: #fff;
}

.uc-main-box {
  padding: 36px 0;

  .uc-content-box {
    margin: 0 48px;
  }

  .portal-content-box {
    .box-bd {
      padding-top: 24px;

      .portal-main {
        .user-card {
          position: relative;
          float: left;
          width: 302px;
          height: 160px;
          padding-left: 180px;
          padding-top: 40px;

          .avatar {
            position: absolute;
            left: 0;
            top: 0;
            padding: 4px;
            border: 1px solid #e0e0e0;
            border-radius: 150px;
          }

          .username {
            margin-bottom: 10px;
            font-size: 24px;
            font-weight: 400;
            color: #616161;
          }

          .tip {
            margin: 0 0 10px;
            color: #b0b0b0;
          }

          .link {
            font-size: 12px;
            color: #ff6700;
            cursor: pointer;
          }
        }

        .user-actions {
          float: right;
          width: 358px;
          margin-top: 35px;

          .action-list {
            margin: 0;
            padding: 0;
            list-style-type: none;
            color: #757575;

            li {
              position: relative;
              padding: 6px 0;
            }
          }
        }
      }

      .portal-sub {
        border-top: 1px solid #e0e0e0;

        .info-list {
          margin: 0;
          padding: 60px 0 0;
          list-style-type: none;
          color: #757575;

          li {
            position: relative;
            float: left;
            width: 276px;
            height: 65px;
            padding-left: 112px;
            padding-top: 15px;
            margin-left: 14px;
            margin-bottom: 80px;

            h3 {
              margin-bottom: 10px;
              font-size: 18px;
              font-weight: 400;

              .num {
                color: #ff6700;
              }
            }

            a {
              .iconfont {
                font-size: 16px;
                line-height: 16px;
                vertical-align: -1px;
              }
            }

            img {
              position: absolute;
              left: -10px;
              top: -10px;
            }
          }
        }
      }
    }
  }
}
</style>      
