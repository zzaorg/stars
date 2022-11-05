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
  vite: {
    server: {
      origin: 'http://localhost:8443/proxy/3000'
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