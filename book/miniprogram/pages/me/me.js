// miniprogram/pages/me/me.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo') || {}
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

  getUserInfo (e) {
    let { userInfo } = e.detail
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        let { openid } = res.result
        userInfo.openid = openid
        wx.setStorage({
          key: "userInfo",
          data: userInfo
        })
        this.setData({
          userInfo
        })
      }
    })
  },

  logout () {
    let that = this
    wx.removeStorage({
      key: 'userInfo',
      success () {
        that.setData({
          userInfo: {}
        })
      }
    })
  },

  scanBook () {
    wx.scanCode({
      success: res => {
        let { result: isbn } = res
        // console.log(isbn)
        if (!isbn) {
          wx.showToast({
            title: '无法解析isbn'
          })
          return;
        }
        // 调用云函数，爬虫
        wx.cloud.callFunction({
          // 云函数名称
          name: 'books',
          // 传给云函数的参数
          data: {
            isbn
          },
          success: function(res) {
            let { bookinfo } = res.result
            // console.log(bookinfo)
            let { title: bookName } = bookinfo
            wx.showLoading({
              title: '添加中',
            })
            db.collection('books').add({
              // data 字段表示需新增的 JSON 数据
              data: bookinfo,
              success: function(res) {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                // console.log(res)
                wx.hideLoading({
                  complete: res => {
                    wx.showToast({
                      icon: 'none',
                      title: `${bookName}添加成功,快去图书馆看看吧`,
                      duration: 2000
                    })
                  },
                })
              }
            })
          },
          fail: function () {
            wx.showToast({
              title: '不能解析该书籍',
            })
          }
        })
      }
    })
  }
})