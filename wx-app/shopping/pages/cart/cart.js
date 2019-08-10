// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,//页面没有商品
    carts:[],
    selectAllStatus:true,//全选框
    totalPrice:''
  },

  getTotalPrice() {//计算价格
    let carts = this.data.carts
    let total = 0
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({//修改数据源用setData
      totalPrice : total.toFixed(2) //保留两位小数
    })
  },

  selectList(e) {//设置商品框选与不选
    // console.log(e)
    let index = e.currentTarget.dataset.index
    let select = `carts[${index}].selected` 
    console.log(select)
    this.setData({
      [select]:!this.data.carts[index].selected//数组修改方式
    })
    this.getTotalPrice()//再次计算价格
    this.setSelectAll()
    // 方法二：
    // let carts = this.data.carts
    // for(let n of carts) {
    //   if(!n.selected) {
    //     this.setData({
    //       selectAllStatus : false
    //     })
    //     return
    //   }else {
    //     this.setData({
    //       selectAllStatus : true
    //     })
    //   }
    // }
  },

  setSelectAll() {//当出现商品选框有一个未选中则全选框为false
    let selectAllStatus = this.data.selectAllStatus
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
     if (!carts[i].selected) {
      this.setData({
        selectAllStatus : false
      })
      return
     }else {
      this.setData({
        selectAllStatus : true
      })
     }
    }
  },
  
  selectAll() {//设置上面的商品框和全选框保持一致
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus =!selectAllStatus
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus : selectAllStatus,
      carts:carts
    })
    this.getTotalPrice()//再次计算价格
  },

  deleteList(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts.splice(index,1)//切割数组 splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
    this.setData({
      carts:carts
    })
    if(!carts.length) {
      this.setData({
        hasList:false
      })
    }else {
      this.getTotalPrice()//再次计算价格
    }
  },

  addCount(e) {//增加商品数量
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    num++
    carts[index].num = num
    this.setData({
      carts:carts
    })
    this.getTotalPrice()//再次计算价格
  },

  reduceCount(e) {//减少商品数量
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    num--
    if(num <=1) {
      num = 1
    }
    carts[index].num = num
    this.setData({
      carts:carts
    })
    this.getTotalPrice()//再次计算价格
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
    setTimeout(() => {
      this.setData({
        hasList:true,
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
      this.getTotalPrice()
    },500)
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