// components/tempText/index.js
import { navTo } from '../../utils/util.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object,
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
    goTo: function(e) {
      // navTo('/pages/article/article?id=', e, 'id')
      const { id, layout } = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/article/article?id=${id}&layout=${layout}`,
      })
    }
  }
})
