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
    name: "@nuxtjs/gtm",
    configKey: "gtm",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    id: process.env.NUXT_PUBLIC_GTM_ID,
  },
  async setup(options, nuxt) {
    if (!options.id) {
      return;
    }

    const { resolve } = createResolver(import.meta.url);
    nuxt.options.build.transpile.push(resolve("./runtime"));

    nuxt.options.runtimeConfig.public.gtm = {
      id: options.id,
    };

    addPlugin({ src: resolve("./runtime/plugins/gtm.client"), mode: "client" });
  },
});
