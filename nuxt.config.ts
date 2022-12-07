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
  css: ["@fontsource/montserrat/latin.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "./modules/hubspot/module"],
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
  vite: {
    plugins: [svgLoader()],
  },
});
