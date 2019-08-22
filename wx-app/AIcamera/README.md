- AI能力由腾讯提供
    小程序 云端能力 tcb
    wx.cloud.callFunction
- 人像识别 需要AI能力
    有经验
- app.js 共享全局数据
    userinfo,应用配置
    高于page 被所有的page共享
- userinfo
    button[open-type="getUserInfo]
    第一次询问用户授权
    微信 开发者第三方 用户
    bindgetuserinfo="getUserInfo" 回调 e.detail

    登录的持久化 userInfo wx.setStorage()
- 多页面共享部分界面
    - 如果是独立组件，usingComponents
    - 比较简单，没有什么业务逻辑，使用template ，不要重复界面
    <import src="" />
    <templte is ="" data="">
    - 样式怎么办？
