const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    global: app.globalData
  },

  showMsg() {
    // wx.showToast({
    //   title: '好不好看',
    // })
    wx.showActionSheet({
      itemList: ['分享到微信', '分享到QQ'],
    })
  },
  play() {
    const mgr = wx.getBackgroundAudioManager()
    mgr.src = "http://m801.music.126.net/20220312182635/323b837956de1ab51434d96696285dc4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/13311636363/4dc5/86fb/edbc/009145255ece7f4c8668b5fba9ea2d52.m4a"
    mgr.title = "脱胎换骨"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id,
      // global: app.globalData
    })
    
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