//导入require请求
let http = require('../../require/index')
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求九宫格点进去的数据 此处需要选择点进去的索引值 先暂定为1 
    http('/categories/1/shops').then(res=>{
      // console.log(res);
      //设置动态标题
      wx.setNavigationBarTitle({
        title: options.title,
      })

      // 请求九宫格点击进去的数据
    http(`/categories/${options.id}/shops`).then(res=>{
      // console.log(res);
      this.setData({
        list:res.data
      })
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})