//index.js
var app = getApp()
Page({
  data: {
    currentTab: 0,
    qunLists: [
      {
        src: 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
        content: '1213123'
      },
      {
        src: 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
        content: '1213123'
      },
      {
        src: 'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
        content: '1213123'
      },
      {
        src: 'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg',
        content: '1213123'
      }
    ],
    personalLists: [
      {
        src: '',
        content: '3333'
      },
      {
        src: '',
        content: '42342'
      },
      {
        src: '',
        content: '22'
      },
      {
        src: '',
        content: 'dsdfasasdf'
      },
      {
        src: '',
        content: 'asdfasdf'
      },
      {
        src: '',
        content: 'asdfasdgg'
      },
      {
        src: '',
        content: 'gdss'
      },
      {
        src: '',
        content: '121sdasdfa3123'
      },
      {
        src: '',
        content: '121sdfasddasdfa3123'
      }
    ],
    gzhLists: [
      {
        src: '',
        content: '3333'
      },
      {
        src: '',
        content: '42342'
      },
      {
        src: '',
        content: '22'
      },
      {
        src: '',
        content: 'dsdfasasdf'
      },
      {
        src: '',
        content: 'asdfasdf'
      },
      {
        src: '',
        content: 'asdfasdgg'
      },
      {
        src: '',
        content: 'gdss'
      },
      {
        src: '',
        content: '121sdasdfa3123'
      },
      {
        src: '',
        content: '121sdfasddasdfa3123'
      }
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.login()
    this.getLists()

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  //预览图片
  previewImages (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let tArr = [];
    if (this.data.currentTab === 0) {
      tArr = this.data.qunLists;
    } else if (this.data.currentTab === 1) {
      tArr = this.data.personalLists;
    } else {
      tArr = this.data.gzhLists;
    }
    let imgArr = tArr.map(val => val.src)
    wx:wx.previewImage({
      current: imgArr[index],
      urls: imgArr,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  login () {
    wx.request({
      url: app.globalData.baseUrl + 'login',
      data: app.globalData.userInfo,
      success: res => {
        console.log(res)
      }
    })
  },
  getLists() {
    console.log(app.globalData)
    console.log(app.globalData.userInfo)
    wx.request({
      url: app.globalData.baseUrl + 'resource',
      data: app.globalData.userInfo,
      success: res => {
        console.log(res)
      }
    })
  }
})
