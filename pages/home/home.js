// pages/home/home.js
import regeneratorRuntime from '../../utils/runtime.js'
import { getFn } from '../../utils/http.js'
import { formatTime } from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    currentDate: formatTime(new Date())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    // this.getComments()
  },

  // 获取数据
  getData: async function(date='') {
    const url = 'https://m.douban.com/rexxar/api/v2/recommend_feed'
    const params = {
      alt: 'json',
      udid: '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
      for_mobile: 1,
      loc_id: 108288
    }
    if (date !== '') {
      params['next_date'] = date
    }
    wx.showLoading({
      title: 'loading...',
    })
    const response = await getFn(url, params)
    wx.hideLoading()
    // console.log(response)
    const copyDataList = JSON.parse(JSON.stringify(this.data.dataList))
    if (response.data.recommend_feeds.length) {
      this.setData({
        dataList: [...copyDataList, ...response.data.recommend_feeds.map(v => ({...v, _date: response.data.date}))],
        // currentDate: response.data.date,
      })
    }
    this.data.currentDate = response.data.date
  },

  // 获取评论
  getComments: async function() {
    const res = await getFn('https://m.douban.com/note/705333714/comments')
    const html = res.data
    const dataStr = html.substring(html.indexOf('TalionData.commentList = '), html.indexOf('TalionData.noteId = ')).split(' = ')[1]
    const dataObj = JSON.parse(dataStr)
    console.log(dataObj)
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
    // console.log(123)
    this.getData(this.data.currentDate)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})