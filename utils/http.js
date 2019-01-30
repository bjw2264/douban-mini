const getFn = (url, params={}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: params,
      method: 'GET',
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}

export {
  getFn
}