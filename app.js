App(
  {
    onLaunch() {
      console.log('小程序启动')
    },
    onShow (options) {
      // Do something when show.
    },
    onHide () {
      // Do something when hide.
    },
    onError (msg) {
      console.log(msg)
    },
    globalData: 'I am global data'
  }
) 