const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatTime = (date, showTime=false) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  let str = [year, month, day].map(formatNumber).join('-')
  if (showTime) {
    str += ` ${[hour, minute, second].map(formatNumber).join(':')}`
  }
  return str
}

const navTo = (path, e, param) => {
  wx.navigateTo({
    url: `${path}${e.currentTarget.dataset[param]}`,
  })
}

export {
  formatTime,
  navTo
}
