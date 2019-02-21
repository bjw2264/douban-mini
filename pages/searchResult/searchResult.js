// pages/searchResult/searchResult.js
import regeneratorRuntime from '../../utils/runtime.js'
import api from '../../utils/apiUrl.js'
import { getFn } from '../../utils/http.js'
const wxParse = require('../../utils/wxParse/wxParse.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const url = api()['search']
    const params = {
      query: options.value,
    }
    wx.showLoading({
      title: 'loading',
    })
    const res = await getFn(url, params)
    wxParse.wxParse('result', 'html', { content: res.data }, this)
    wx.hideLoading()
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