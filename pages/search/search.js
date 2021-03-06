// pages/search/search.js
import regeneratorRuntime from '../../utils/runtime.js'
import api, { baseUrl } from '../../utils/apiUrl.js'
import { getFn } from '../../utils/http.js'
const wxParse = require('../../utils/wxParse/wxParse.js')
const CATEGORY = [
  {
    cat: `movieDetail`,
    title: '电影',
    desc: '影院热映',
    color: '#2384e8',
    openStatus: true,
  },
  {
    cat: `tvDetail`,
    title: '电视',
    desc: '正在热播',
    color: '#7a6adb',
    openStatus: true
  },
  {
    cat: `book`,
    title: '图书',
    desc: '畅销排行',
    color: '#9f7860'
  },
  {
    cat: `${baseUrl}/`,
    title: '同城',
    desc: '周末活动',
    color: '#e6467e'
  },
  {
    cat: `${baseUrl}/`,
    color: '#2ab8cc',
    title: '小组',
    desc: '志趣相投'
  },
  {
    cat: `${baseUrl}/`,
    color: '#f48f2e',
    title: '音乐',
    desc: '新碟榜'
  },
  {
    cat: `${baseUrl}/`,
    color: '#9f7860',
    title: '阅读',
    desc: '电子书'
  },
  {
    cat: `${baseUrl}/`,
    color: '#5774c5',
    title: '游戏',
    desc: '虚拟世界'
  },
  {
    cat: `${baseUrl}/`,
    color: '#596cdd',
    title: '应用',
    desc: '玩手机'
  },
  {
    cat: `${baseUrl}/`,
    color: '#e1644d',
    title: '广播',
    desc: '友邻动态'
  },
  {
    cat: `${baseUrl}/`,
    color: '#40cfa9',
    title: 'FM',
    desc: '红心歌单'
  },
  {
    cat: `${baseUrl}/`,
    color: '#42bd56',
    title: '豆豆',
    desc: '生活美学'
  },
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowSearchIcon: true,
    category: CATEGORY,
    // inputVal: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  goTo: function() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },

  onFocus: function(e) {
    this.setData({
      isShowSearchIcon: false
    })
  },

  onBlur(e) {
    if (e.detail.value === '') {
      this.setData({
        isShowSearchIcon: true
      })
    }
  },

  async onConfirm(e) {
    const { value } = e.detail
    if (value !== '') {
      wx.navigateTo({
        url: `/pages/searchResult/searchResult?value=${value}`,
      })
    }
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