// components/categorySearch/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    color: String,
    title: String,
    desc: String,
    openStatus: Boolean,
    cat: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTo() {
      if (this.data.openStatus) {
        // console.log(123)
        wx.navigateTo({
          url: '/pages/searchDetail/searchDetail?cat='+this.data.cat,
        })
      } else {
        wx.showToast({
          title: '近期开放！',
          image: '/images/tips.png',
          duration: 600
        })
      }
    }
  }
})
