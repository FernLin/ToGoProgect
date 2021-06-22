export default {
  pages: [
    'pages/home/index',
    'pages/my/index',
  ],
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#f034c1',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
