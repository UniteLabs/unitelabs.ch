import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

interface ModuleOptions {
  id?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@nuxtjs/hubspot",
    configKey: "hubspot",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    id: process.env.NUXT_PUBLIC_HUBSPOT_ID,
  },
  async setup(options, nuxt) {
    if (!options.id) {
      return;
    }

    // nuxt.options.app.head.style ??= [];
    // nuxt.options.app.head.style.push({
    //   children: "#hs-eu-cookie-confirmation { display: none; }",
    // });

    nuxt.options.app.head.script ??= [];
    nuxt.options.app.head.script.push({
      id: "hs-script-loader",
      type: "text/javascript",
      async: true,
      defer: true,
      src: `//js-eu1.hs-scripts.com/${options.id}.js`,
    });

    const { resolve } = createResolver(import.meta.url);
    nuxt.options.build.transpile.push(resolve("./runtime"));

    nuxt.options.runtimeConfig.public.hubspot = {
      id: options.id,
    };
  
    addPlugin(resolve("./runtime/plugins/tracking"));
    addImportsDir(resolve("./runtime/composables"));
  },
});
