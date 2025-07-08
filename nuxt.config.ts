// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@formkit/auto-animate",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "motion-v/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Pacifico: true,
      "IBM Plex Mono": true,
    },
  },
});
