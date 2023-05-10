// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: { // Default head tags
      charset: 'utf-8',
      title: 'Piotr Garbicz // Developer',
      meta: [ // Default meta tags
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
    }
  },

  css: [
    '~/assets/style/main.scss'
  ],

})
