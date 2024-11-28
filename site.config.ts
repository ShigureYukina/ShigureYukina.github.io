import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '米崎妙妙屋',
  author: {
    name: '千崎志乃',
  },
  description: '千崎志乃的个人博客.',
  social: [

  ],

  search: {
    enable: true,
    type: 'engine',
  },

  sponsor: {
    enable: false,
    title: '感谢支持',
    methods: [
      {
        name: '支付宝',
        url: '',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: '',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: '',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
