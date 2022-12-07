import { Consent } from "~~/modules/hubspot/runtime/composables/useConsent";

declare global {
  interface Window {
    dataLayer?: Array<any>;
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const consent = useState<Consent | null>("consent");

  window.dataLayer ??= [];
  function gtag(...args: any[]) {
    window.dataLayer?.push(args);
  }

  watch(consent, (newValue, oldValue) => {
    if (!oldValue?.analytics && newValue?.analytics) {
      useHead({
        script: [
          {
            id: "gtm-script-loader",
            type: "text/javascript",
            async: true,
            defer: true,
            src: `//googletagmanager.com/gtag/js?id=${config.public.gtm.id}`,
          },
        ],
      });

      gtag('js', new Date());
      gtag('config', 'G-HNT1PL4WYG');
    }
  }, { immediate: true, deep: true });
});
