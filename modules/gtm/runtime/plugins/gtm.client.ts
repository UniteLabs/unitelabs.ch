import { Consent } from "~~/modules/hubspot/runtime/composables/useConsent";

type Event = any;
type ConsentListener = (consent: Consent) => void;

declare global {
  interface Window {
    dataLayer?: Array<Event>;
    addConsentListener?: (listener: ConsentListener) => void;
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const consent = useState<Consent | null>("consent");
  const consentListeners: ConsentListener[] = [];

  window.addConsentListener = (listener) => {
    consentListeners.push(listener);
  };

  window.dataLayer ??= [];
  function gtag(event: Event) {
    window.dataLayer?.push(event);
  }

  gtag({ event: 'gtm.js', 'gtm.start': new Date().getTime() });
  useHead({
    script: [
      {
        id: "gtm-script-loader",
        type: "text/javascript",
        async: true,
        defer: true,
        src: `//googletagmanager.com/gtm.js?id=${config.public.gtm.id}`,
      },
    ],
  });

  watch(consent, (newValue, oldValue) => {
    if (!oldValue && newValue) {
      consentListeners.forEach((callback) => {
        callback({...newValue});
      });
    }
  }, { immediate: true, deep: true });
});
