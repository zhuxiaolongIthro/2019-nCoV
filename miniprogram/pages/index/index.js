//index.js
const app = getApp()
Page({
  data: {
    response:{}
  },
  onPullDownRefresh(){
    console.log("pull down")
    this.refreshData();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.refreshData();
  },
  refreshData:function(){
    var tt = this;

    wx.request({
      url: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
      header: { 'content-type': 'application/json' },
      success(res) {
        // 解析返回值
        console.log("text :" + JSON.stringify(res.data));
        console.log("data_title " + res.data.data_title);
        console.log("data {}" + res.data.data)
        console.log("data {}" + JSON.stringify(res.data.data))
        tt.setData({
          response: res.data
        });
        wx.stopPullDownRefresh();
      },
      fail(res) {
        console.log(res.error)
      }
    })
  }
})