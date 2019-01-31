// pages/article/article.js
import regeneratorRuntime from '../../utils/runtime.js'
import { getFn } from '../../utils/http.js'
import api from '../../utils/apiUrl.js'
const wxParse = require('../../utils/wxParse/wxParse.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleData: {},
    commentList: [],
    layout: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log(options)
    this.setData({
      layout: options.layout
    })
    wx.showLoading({
      title: 'loading...',
    })
    if (options.layout == 1) {
      await this.getArticle(options.id)
      await this.getComments(options.id)
      wxParse.wxParse('article', 'html', this.data.articleData, this)
    }
    if (options.layout == 5) {

    }
    wx.hideLoading()
  },

  // 获取文章
  getArticle: async function(id) {
    const url = api(id)['article']
    const res = await getFn(url)
    this.setData({
      articleData: {...res.data}
    })
    // console.log(res.data)
  },

  // 获取评论
  getComments: async function (id) {
    const url = api(id)['comments']
    const res = await getFn(url)
    const html = res.data
    const dataStr = html.substring(html.indexOf('TalionData.commentList = '), html.indexOf('TalionData.noteId = ')).split(' = ')[1]
    const dataObj = JSON.parse(dataStr)
    this.setData({
      commentList: [...dataObj]
    })
    // console.log(dataObj)
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