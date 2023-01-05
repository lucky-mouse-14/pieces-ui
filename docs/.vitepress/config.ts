import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar: any = {
  '/': [
    // { text: '快速开始', link: '/' },

    {
      text: "通用",
      items: [
        { text: 'Button 按钮', link: '/components/button/' }
      ]
    },
    // { text: '导航' },
    // { text: '反馈' },
    // { text: '数据录入' },
    // { text: '数据展示' },
    // { text: '布局' },
  ]
}


export default defineConfig({
  title: '💼 PiecesUI',
  description: 'VUE3 Components UI',
  base: '/',
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2022 lucky-mouse'
    },
    nav: [
      // { text: '首页', link: '/' },
      { text: '📃文档', link: '/' }
    ],
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加 DemoBlock 插槽
      md.use(demoBlockPlugin)
    }
  },
  vite: {
    server: {
      host: true,
      port: 5991,
      open: false,
    }
  },
})
