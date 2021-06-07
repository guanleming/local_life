  module.exports = (path, data, method = "get") => {
    //1 页面请求的时候显示加载中
    wx.showLoading({
      title: '加载中',
    })

    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://locally.uieee.com/${path}`,
        data,
        method,
        success:(res)=>{
          resolve(res);
          //加载成功后隐藏 加载中
          wx.hideLoading({
            success: (res) => {},
          })
        },
        fail: (res)=>{
          reject(res)
        }
      })

    })
  }