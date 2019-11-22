Page({
  //CRUD
  navigateToAdd: function (event) {
    //Create
    wx.navigateTo({
      url: '../add/add',
    })
  },
  //列表
  navigateToIndex: function () {
    //Query
    wx.navigateTo({
      url: '../index/index',
    })
  }
})