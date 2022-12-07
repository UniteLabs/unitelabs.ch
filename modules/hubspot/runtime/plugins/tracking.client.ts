export default defineNuxtPlugin(() => {
  const { consent } = useConsent();

  window._hsp ??= [];
  window._hsp.push([
    "addPrivacyConsentListener",
    (newValue) => {
      consent.value = {
        necessary: true,
        analytics: newValue.categories.analytics,
        advertisement: newValue.categories.advertisement,
        functionality: newValue.categories.functionality,
      };
    },
  ]);
});
