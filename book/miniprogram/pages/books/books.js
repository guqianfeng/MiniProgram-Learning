// miniprogram/pages/books/books.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist: []
  },

  getBookList () {
    db.collection('books').orderBy('create_time', 'desc').get({
      success: res => {
        // res.data 包含该记录的数据
        console.log(res.data)
        this.setData({
          booklist: res.data
        })
      }
    })
    wx.stopPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBookList()
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
    this.getBookList()
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