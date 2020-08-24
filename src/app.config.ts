import { AppConfig } from 'remax/wechat';

const config: AppConfig = {
  pages: ['pages/index/index', 'pages/my/my'],
  window: {
    navigationBarTitleText: '01Hotel',
    navigationBarBackgroundColor: '#282c34',
  },
  tabBar: {
    color: '#000000',
    backgroundColor: '#ffffff',
    selectedColor: 'red',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
      },
      {
        text: '我的',
        pagePath: 'pages/my/my',
      },
    ],
  },
};

export default config;
