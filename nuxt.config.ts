import { AuraPreset } from "./themes/aura.theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@pinia/nuxt"],

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },

  components: [
    {
      path: "~/components",
      extensions: ["vue"],
      global: true,
      pathPrefix: false,
    },
  ],

  primevue: {
    usePrimeVue: true,
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: AuraPreset,
        options: {
          prefix: "p",
          darkModeSelector: "system",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },

  css: ["primeicons/primeicons.css"],
});
