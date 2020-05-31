// miniprogram/pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        title: "标签0",
        active: true,
      },
      {
        id: 1,
        title: "标签1",
        active: false,
      },
      {
        id: 2,
        title: "标签2",
        active: false,
      },
      {
        id: 3,
        title: "标签3",
        active: false,
      }
    ]
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

  },

  changeTab (e) {
    let { index } = e.detail;
    // console.log(index)
    let tabs = JSON.parse(JSON.stringify(this.data.tabs))
    tabs.forEach((tab, i) => i === index ? tab.active = true : tab.active = false )
    this.setData({
      tabs
    })
  }
})