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

  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '米崎妙妙屋',
    },

    pages: [
      {
        name: '个人QQ',
        url: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1220870371',
        icon: 'i-ri-qq-line',
        color: '#12B7F5',
      },
      {
        name: 'Twitter',
        url: 'https://x.com/sweyyuki',
        icon: 'i-ri-twitter-line',
        color: '#1DA1F2',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ShigureYukina',
        icon: 'i-ri-github-line',
        color: '#FFFFFF',
      },
      {
        name: '哔哩哔哩',
        url: 'https://space.bilibili.com/32494859',
        icon: 'i-ri-bilibili-line',
        color: '#FF8EB3',
      },
      {
        name: 'E-Mail',
        url: 'mailto:shigureyuki@duck.com',
        icon: 'i-ri-mail-line',
        color: '#8E71C1',
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

