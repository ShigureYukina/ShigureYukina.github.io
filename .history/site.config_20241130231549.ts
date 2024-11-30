import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
	url: 'https://shigureyukina.github.io/',
	lang: 'zh-CN',
	title: '米崎妙妙屋',
	subtitle: '日が暮れては 帰ろうねと',

	author: {
		name: '千崎志乃',
		avatar: "https://avatars.githubusercontent.com/u/142714300",	//头像链接

		status: {
			emoji: '♥',	// 头像旁边的emoji
			message: '自由中'
		},
	},
	description: '',
	social: [
		{
			name: '个人QQ',
			link: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1220870371',
			icon: 'i-ri-qq-line',
			color: '#12B7F5',
		},
		{
			name: '哔哩哔哩',
			link: 'https://space.bilibili.com/32494859',
			icon: 'i-ri-bilibili-line',
			color: '#FF8EB3',
		},
		{
			name: 'E-Mail',
			link: 'mailto:shigureyuki@duck.com',
			icon: 'i-ri-mail-line',
			color: '#yellow	',
		},
		{
			name: 'Twitter',
			link: 'https://x.com/sweyyuki',
			icon: 'i-ri-twitter-line',
			color: '#1DA1F2',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/ShigureYukina',
			icon: 'i-ri-github-line',
			color: '#9283e5',
		},
	],
	favicon: 'pwa-192x192.png',
	lastUpdated: true,
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

