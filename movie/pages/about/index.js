//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../feedback/index'
    })
  },
  //扫一扫
  scanCode: function () {
    wx.scanCode({
      success: (res) => {

        this.setData({
          userInfo: res.result
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '没事别乱点',
      desc: '这里是智障电影查询小程序的维护小组，联系电话110',
      path: '/pages/about/index?hotappPath=about'
    }
  },
  onLoad: function (option) {

  },
  onReady: function () {

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏


  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },

})
