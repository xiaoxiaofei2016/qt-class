// miniprogram/pages/add/add.js
const db = wx.cloud.database();//以下调用获取默认环境的数据库的引用
const productsCollection = db.collection('products');//表，集合
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData() {
    const product = {
      title:`Product ${(Math.random() * 1000).toString()}`,
      image: "https://res.wx.qq.com/wxdoc/dist/assets/img/10Input.0bcca340.png", 
      tags:["tag123","tag23"],
      price:Math.random() * 100,
      color:'blue',
      view:Math.floor(Math.random()*10)
    }
    productsCollection.add({
      data: product //data 字段表示需新增的 JSON 数据
      })
      .then(res => {
        console.log(res) // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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