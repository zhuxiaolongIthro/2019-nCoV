//index.js
const app = getApp()
Page({
  data: {
    data: {
      data_title: '',
      data: {
        cachetime: '',
        gntotal: '',
        deathtotal: '',
        econNum: '',
        gntotal: '',
        heconNum: '',
        list: [{
          name: '',
          ename: '',
          value: '',
          conadd: '',
          hejian: '',
          econNum: '',
          susNum: '',
          deathNum: '',
          cureNum: ''
        }]
      }
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var tt = this;
    wx.request({
      url: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
      data: {
        data_title: '',
        data: {
          cachetime: '',
          gntotal: '',
          deathtotal: '',
          econNum: '',
          gntotal: '',
          heconNum: '',
          list: [{
            name: '',
            ename: '',
            value: '',
            conadd: '',
            hejian: '',
            econNum: '',
            susNum: '',
            deathNum: '',
            cureNum: ''
          }]
        }
      },
      success(res) {
        tt.setData({
          myData: res,
          list:res.data.list
        })
        console.log("finished")
      },
      fail(res) {
        console.log(res.error)
      }
    })
  },

})