export interface Consent {
  necessary: true;
  analytics: boolean;
  advertisement: boolean;
  functionality: boolean;
}

declare global {
  interface Window {
    _hsp: Array<
      | ["doNotTrack"]
      | ["showBanner"]
      | ["revokeCookieConsent"]
      | ["addPrivacyConsentListener", (consent: { allowed?: boolean; categories: Consent; previousCategories: Consent; }) => void]
    >;
  }
}

const cookieRegexp = /1:(?<analytics>\w+),2:(?<advertisement>\w+),3:(?<functionality>\w+)/;

export const useConsent = () => {
  const config = useRuntimeConfig();
  const cookie = useCookie<Consent>("__hs_cookie_cat_pref", {
    sameSite: 'lax',
    expires: (() => {
      const date = new Date();
      date.setUTCMonth(date.getUTCMonth() + 6);
      return date;
    })(),
    encode(value) {
      return `1:${value.analytics},2:${value.advertisement},3:${value.functionality}`;
    },
    decode(value) {
      const match = cookieRegexp.exec(value);

      return {
        necessary: true,
        analytics: match?.groups?.analytics === 'true',
        advertisement: match?.groups?.advertisement === 'true',
        functionality: match?.groups?.functionality === 'true',
      };
    },
  });
  const consent = useState<Consent | null>("consent", () => cookie.value);

  watch(consent, (newValue, oldValue) => {
    cookie.value = newValue;

    if (!oldValue && newValue) {
      useHead({
        script: [{
          id: "hs-script-loader",
          type: "text/javascript",
          async: true,
          defer: true,
          src: `//js-eu1.hs-scripts.com/${config.public.hubspot.id}.js`,
        }],
      });
    }
  }, { immediate: true, deep: true });

  return {
    consent,
  };
};
