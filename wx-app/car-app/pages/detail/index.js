// pages/detail/index.js
const db = require('../../assets/db');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [
      { name: '电脑', price: 6000 },
      { name: '手机', price: 6000 }
    ]
  },
  // reduce

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    console.log(options);
    console.log(db.vehicles);
    // var nums = [0, 1, 2, 3, 4]
    // for () {  // 得到数组每一项 }
    // find(() => { // 得到数组每一项  })
    const entity = db.vehicles.find(item => {
      return item.id == id;
    })
    if (entity) {
      this.setData({
        entity
      })
      wx.setNavigationBarTitle({
        title: entity.header
      })
    } else {
      wx.redirectTo({
        url: '../index/index'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})