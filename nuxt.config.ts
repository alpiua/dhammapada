// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css'
  },
  app: {
    head: {
      titleTemplate: (title?: string) => (title ? `Dhammapada — ${title}` : 'Dhammapada'),
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Dhammapada' },
        { property: 'og:image', content: 'https://dhammapada.pp.ua/wheel.webp' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://dhammapada.pp.ua/wheel.webp' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap'
        }
      ]
    }
  }
})
