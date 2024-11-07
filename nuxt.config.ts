import Aura from "@primevue/themes/aura";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
  ],

  css: [
    "~/assets/scss/main.scss",
    "~/node_modules/primeflex/primeflex.css",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
    defaultLocale: "fr",
    strategy: "no_prefix",
  },

  app: {
    head: {
      titleTemplate: "%s — WIGPI",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  devServer: {
    port: 8080,
  },

  devtools: { enabled: true },
});
