// pages/searchDetail/searchDetail.js
import regeneratorRuntime from '../../utils/runtime.js'
import api from '../../utils/apiUrl.js'
import { getFn } from '../../utils/http.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    first: {},
    second: {},
    three: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options.cat)
    // let url = ''
    // switch(options.cat) {
    //   case 'movie':
    //     url = api()['movieDetail']
    //     break
    //   case 'tv':
    //     url = api()['tvDetail']
    //     break
    //   default:
    //     break
    // }
    // const params = {
    //   // callback: 'jsonp1',
    //   start: 0,
    //   count: 8,
    //   loc_id: 108288,
    //   _: 1550726167184,
    // }
    // wx.showLoading({
    //   title: 'loading...',
    // })
    // const resHot = await getFn(url.hot, Object.assign({}, params, {callback: 'jsonp1'}))
    // const resFree = await getFn(url.free, Object.assign({}, params, {callback:'jsonp2'}))
    // const resLatest = await getFn(url.latest, Object.assign({}, params, {callback:'jsonp3'}))
    // wx.hideLoading()
    // // console.log(this.jsonp2json(resHot.data))
    // this.setData({
    //   hot: this.jsonp2json(resHot.data),
    //   free: this.jsonp2json(resFree.data),
    //   latest: this.jsonp2json(resLatest.data)
    // })
  },

  async getData(type) {
    const url = api()[type]
    const params = {
      start: 0,
      count: 8,
      loc_id: 108288,
      _: 1550726167184,
    }
    wx.showLoading({
      title: 'loading...',
    })
    const firstData = await getFn(url.first, Object.assign({}, params, { callback: 'jsonp1' }))
    const secondData = await getFn(url.second, Object.assign({}, params, { callback: 'jsonp1' }))
    const threeData = await getFn(url.three, Object.assign({}, params, { callback: 'jsonp1' }))
    wx.hideLoading()
    this.setData({
      first: this.jsonp2json(firstData.data),
      second: this.jsonp2json(secondData.data),
      three: this.jsonp2json(threeData.data),
    })
  },

  jsonp2json(jsonpStr) {
    const str = jsonpStr.replace(/^[;_$\w\d]{0,}\(/, "").replace(/\);$/, '')
    return JSON.parse(str)
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