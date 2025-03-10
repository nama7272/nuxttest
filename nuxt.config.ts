// https://nuxt.com/docs/api/configuration/nuxt-config
import { quasar } from '@quasar/vite-plugin'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    // server: {
    //   watch: {
    //     usePolling: true
    //   }
    // },
    // plugins: [
    //   quasar(),
    // ],
  },
  build: {
    transpile: ["quasar"],
  },
  modules: [
    // '@pinia/nuxt',
    // '@pinia-plugin-persistedstate/nuxt',
    'nuxt-quasar-ui'
  ],
  css: [
    '@quasar/extras/ionicons-v4/ionicons-v4.css'
  ],
})
