// pages/search/search.js
import regeneratorRuntime from '../../utils/runtime.js'
import api from '../../utils/apiUrl.js'
import { getFn } from '../../utils/http.js'
const CATEGORY = [
  {
    title: '电影',
    desc: '影院热映',
    color: '#2384e8'
  },
  {
    title: '电视',
    desc: '正在热播',
    color: '#7a6adb'
  },
  {
    title: '图书',
    desc: '畅销排行',
    color: '#9f7860'
  },
  {
    title: '同城',
    desc: '周末活动',
    color: '#e6467e'
  },
  {
    color: '#2ab8cc',
    title: '小组',
    desc: '志趣相投'
  },
  {
    color: '#f48f2e',
    title: '音乐',
    desc: '新碟榜'
  },
  {
    color: '#9f7860',
    title: '阅读',
    desc: '电子书'
  },
  {
    color: '#5774c5',
    title: '游戏',
    desc: '虚拟世界'
  },
  {
    color: '#596cdd',
    title: '应用',
    desc: '玩手机'
  },
  {
    color: '#e1644d',
    title: '广播',
    desc: '友邻动态'
  },
  {
    color: '#40cfa9',
    title: 'FM',
    desc: '红心歌单'
  },
  {
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
    // searchResult: '',
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
    // console.log(e)
    // const value = e.detail.value
    const { value } = e.detail
    if (value !== '') {
      const url = api()['search']
      const params = {
        query: encodeURIComponent(value),
      }
      wx.showLoading({
        title: 'loading',
      })
      const res = await getFn(url, params)
      wx.hideLoading()
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