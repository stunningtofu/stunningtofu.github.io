import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Johan Putra',
  description: 'Johan Putra\'s personal website',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/about' },
    ],

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'About', link: '/about' },
          {
            text: 'Container',
            items: [
              { text: 'Service Account', link: '/k8s-service-account' },
              { text: 'Secret', link: '/k8s-secret' },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})

