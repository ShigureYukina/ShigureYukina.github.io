import { defineValaxyConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-sakura'

export default defineValaxyConfig<ThemeUserConfig>({
  theme: 'sakura',

  themeConfig: {
    banner: {
      title: '欢迎来到千崎志乃的个人博客',
      motto: 'それが わたしのストーリー，いつまでも 笑う ひとひら',
      urls: [
        'https://w.wallhaven.cc/full/2y/wallhaven-2ymr79.png'
      ],
      style: 'filter-dot',
    },
  },
})