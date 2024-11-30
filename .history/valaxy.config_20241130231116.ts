import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

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
				icon: 'i-mdi-file-word-box-outline',
				color: '#9283e5',
			},
			{
				name: '留言板',
				url: '/links/message',
				icon: 'i-ri-message-line',
				color: '#9283e5',
			},
			{
				name: '关于我',
				url: '/about/me',
				icon: 'i-ri-user-line',
				color: '#9283e5',
			},
		],
		bg_image: {
			enable: true,
			url: "https://wallpapercave.com/wp/wp13991488.jpg",	// 日间背景
			dark: "https://w.wallhaven.cc/full/2y/wallhaven-2ymr79.png",	// 夜间背景
			opacity: 0.8
		},
		colors: {
			primary: "#9283e5",
		},
		footer: {
			since: 2024,
			beian: {
				enable: false,
				icp: '苏ICP备17038157号',
			},
		},
	},
	unocss: { safelist },

})

