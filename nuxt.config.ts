// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      charset: 'utf-8',
      title: 'Piotr Garbicz // Developer',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0D0D0D' },

        { name: 'description', content: "Ruby on Rails & JS fintech developer with nearly 5 years of experience and bachelor's degree in jazz." },
        { name: 'keywords', content: 'developer frontend backend piotr garbicz vue ruby rails nuxt' },

        { name: 'og:title', content: 'Piotr Garbicz // Developer' },
        { name: 'og:description', content: "Ruby on Rails & JS fintech developer with nearly 5 years of experience and bachelor's degree in jazz." },
        { name: 'og:url', content: 'https://piotrgarbicz.dev' },
        { name: 'og:image', content: './ogimage.png' },
      ],
      link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' } ],
      htmlAttrs: { lang: 'en' }
    }
  },

  css: [
    '~/assets/style/main.scss'
  ],

})
