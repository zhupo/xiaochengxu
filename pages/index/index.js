//index.js
var app = getApp()
Page({
  data: {
    currentTab: 0,
    qunLists: [
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
        content: '1213123'
      },
      {
        src: '',
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
  }
})
