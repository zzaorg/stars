import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      domain: ''
    }
  },
  content: {
    ignores: [
      '.*\\.(jpg|jpeg|png)$',
    ]
  },
  nitro: {
    publicAssets: [
      {
        dir: __dirname + '/content'
      }
    ]
  }
})