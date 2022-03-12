// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['posts-bottom'],
  properties: {
    // src: {
    //   type: String,
    //   value: ''
    // }
    src: String
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
    goDetail(e) {
      // console.log(e.currentTarget.dataset)
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/posts-detail/postsdetail?id=' + id,
      })
    },
  }
})