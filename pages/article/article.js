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
    imageList: [],
    layout: -1,
    id: 0,
    isMoreImg: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log(options)
    this.setData({
      layout: options.layout,
      id: options.id,
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
      await this.getImages(options.id)
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

  // 从html中提取图片url
  _getImageSrc: function(html) {
    const imgReg = /<img.*?(?:>|\/>)/gi;
    const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    const imgArr = html.match(imgReg)
    // console.log(imgArr)
    const srcArr = []
    if (imgArr.length) {
      imgArr.forEach(str => srcArr.push(str.match(srcReg)[1]))
    }
    const dataArr = srcArr.filter(src => /p\d{10,}.jpg$/.test(src))
    return dataArr
  },

  // 获取图片
  getImages: async function(id) {
    const url = api(id)['images']
    const res = await getFn(url)
    const dataArr = this._getImageSrc(res.data)
    this.setData({
      imageList: dataArr.filter(v => v.indexOf('sqs') === -1)
    })
  },

  // 加载更多图片
  getMoreImage: async function() {
    const url = api()['moreImages']
    const params = {
      start: this.data.imageList.length,
      id: this.data.id
    }
    wx.showLoading({
      title: 'loading...'
    })
    const res = await getFn(url, params)
    wx.hideLoading()
    if (!res.data.more) {
      this.setData({
        isMoreImg: false
      })
      return
    }
    const dataArr = this._getImageSrc(res.data.html)
    this.setData({
      imageList: [...this.data.imageList, ...dataArr]
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
    // console.log(123)
    this.data.isMoreImg && this.getMoreImage()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})