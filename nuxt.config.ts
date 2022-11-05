import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || '',
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