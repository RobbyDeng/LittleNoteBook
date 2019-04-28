// pages/excerpt_detail/excerpt_detail.js
// const icon = "../../pages/icon/icon_ren.png"
const buttons = [
  {
    label: 'Share',
    icon: '../../pages/icon/ai-share.png'
  },
  {
    label: 'Delete',
    icon: '../../pages/icon/ai-delete.png'
  },
  {
  label: 'Edit',
  icon:'../../pages/icon/ai-edit.png'
},
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    excerpt_info:[
      {
        create_time:'2019-6-18',
        title:'智能旅行好物分享',
        path:null,
      }
    ],
    dirIndex: 0,
    sAngle: 0,
    eAngle: 360,
    spaceBetween: 10,
    buttons,
  },
  onClick(e) {
    console.log('onClick', e.detail.buttons.length)
      if (e.detail.buttons[0].label == 'Share') {
        wx.navigateTo({
          url: '../excerpt_share/excerpt_share'
        })
      }
      else if (e.detail.buttons[1].label == 'Edit') {
        wx.navigateTo({
          url: '../test/test'
        })
      }
      else if (e.detail.buttons[2].label =='Delete') {
        wx.navigateTo({
          url: '../article/article'
        })
      }
    
    
  },

  pickerChange(e) {
    const { value } = e.detail
    const { model } = e.currentTarget.dataset

    this.setData({
      [model]: value,
    })
  },
  onSwitch(e) {
    this.setData({
      reverse: e.detail.value,
    })
  },
  onAngle(e) {
    const { value } = e.detail
    const sAngle = value ? -90 : 0
    const eAngle = value ? -210 : 360
    const spaceBetween = value ? 30 : 10

    this.setData({
      sAngle,
      eAngle,
      spaceBetween,
    })
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