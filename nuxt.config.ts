// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Ref: https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
          api: 'modern-compiler',
        },
      },
    },
  },

  css: ['~/assets/styles/main.scss'],

  components: [
    {
      path: '~/components',
      // Ref: https://nuxt.com/docs/guide/directory-structure/components#component-names
      pathPrefix: false,
    },
  ],

  devtools: { enabled: process.env.ENV !== 'production' },

  typescript: {
    typeCheck: true,
  },

  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', 'vuetify-nuxt-module', '@nuxtjs/strapi'],

  runtimeConfig: {
    public: {
      gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID ?? '', // GA4 measurement ID; see https://support.google.com/analytics/answer/12270356?hl=en
    },
  },
});
