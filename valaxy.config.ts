import type {UserThemeConfig} from 'valaxy-theme-yun'
import {defineValaxyConfig} from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '米崎妙妙屋',
    },
    pages: [
      {
        name: '关于站点',
        url: '/about/site',
        icon: 'i-ri-home-4-line',
        color: '#12B7F5',
      },
    ],



    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },
  unocss: {safelist},

})

