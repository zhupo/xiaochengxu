// pages/add/add.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: '',
    signArr: [],
    signInput: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app)
  },

  getSignInputValue (e) {
    this.setData({
      signInput: e.detail.value
    })
  },

  addSign () {
    if (this.data.signArr.length < 4) {
      if (this.data.signInput !== '') {
        if (!this.data.signArr.includes(this.data.signInput)) {
          this.data.signArr.push(this.data.signInput)
          this.setData({
            signArr: this.data.signArr,
            signInput: ''
          })
        } else {
          wx.showToast({
            title: '该标签已添加',
            icon: 'none'
          })
        }
      }
    } else {
      wx.showToast({
        title: '最多添加四个标签',
        icon: 'none'
      })
    }
  },

  deleteSign (e) {
    let name = e.currentTarget.dataset.name
    let arr = this.data.signArr.filter(val => val !== name)
    this.setData({
      signArr: arr
    })
  },

  chooseImg () {
    let t = this
    wx.chooseImage({
      success: function(res) {
        t.setData({
          imgSrc: res.tempFilePaths
        })
      },
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