//index.js
const app = getApp()

Page({
  data: {
    
    avatarUrl: './user-unlogin.png',
    userInfo: null,
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  start: function() {
    wx.navigateTo({
      url:'/pages/detect/index'
    })
  },
  onLoad: function() {
    if(app && app.globalData && app.globalData.userInfo) {
      this.setUserInfo(app.globalData);
    }
  },

  setUserInfo(info) {
    //MVVM
    this.setData({
      userInfo: info ? info.userInfo : null
    });
    app.globalData.userInfo = this.data.userInfo;
  },

  getUserInfo (e) {
    console.log(e);
    try {
      let info = null;
      if(e && e.detail && e.detail.userInfo) {
        let {
          detail: {userInfo}
        } = e;
        info = {
          userInfo: {
            nickname: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl
          }
        }
        this.setUserInfo(info);
      }
    }catch(e) {
      console.log(1);
      wx.showToast({
        title:'登录失败，请重试',
        icon:'none',
        mask:true
      })
    }
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
