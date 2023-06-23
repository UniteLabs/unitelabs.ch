import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  app: {
    head: {
      title: "UniteLabs AG",
      meta: [
        {
          name: "description",
          content: "Data enables science. We enable data.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  css: ["@fontsource/assistant/latin.css"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "./modules/hubspot/module",
    "./modules/gtm/module",
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  generate: {
    routes: ['/', '/future-labs-live']
  },
  vite: {
    plugins: [svgLoader()],
  },
});
