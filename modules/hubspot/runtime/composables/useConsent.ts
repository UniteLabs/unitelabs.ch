export interface Consent {
  necessary: true;
  analytics: boolean;
  advertisement: boolean;
  functionality: boolean;
}

export interface ConsentUpdate {
  allowed?: boolean;
  categories: Consent;
  previousCategories: Consent;
}

declare global {
  interface Window {
    _hsp: Array<
      | ["doNotTrack"]
      | ["showBanner"]
      | ["revokeCookieConsent"]
      | ["addPrivacyConsentListener", (consent: ConsentUpdate) => void]
    >;
  }
}

export const useConsent = () => {
  const cookie = useCookie<Consent>("consent");

  onMounted(() => {
    window._hsp ??= [];
    window._hsp.push([
      "addPrivacyConsentListener",
      (consent) => {
        console.log("PrivacyConsentListener", consent);
      },
    ]);
  });

  const pending = computed(() => !cookie.value);

  function config(consent: Consent) {
    cookie.value = consent;

    if (cookie.value.analytics) {
    }
  }

  return {
    pending,
    config,
  };
};
