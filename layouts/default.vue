<template>
  <div class="app">
    <LazyCookieConsentBanner v-if="showConsentBanner"></LazyCookieConsentBanner>

    <div class="flex min-w-app">
      <div class="flex-auto flex flex-col min-h-screen max-w-full relative">
        <!-- header -->
        <Header></Header>

        <!-- main -->
        <main id="main" class="flex-1">
          <slot></slot>
        </main>

        <!-- footer -->
        <footer class="bg-teal-900 text-white">
          <div class="container py-4 text-center flex flex-wrap">
            <div class="w-1/2">
              <address class="not-italic">
                UniteLabs AG<br/>
                c/o knefi gmbh<br/>
                Dornacherstrasse 288<br/>
                4053 Basel<br/>
                Switzerland
              </address>
            </div>
            <ul class="w-1/2">
              <li><NuxtLink to="/legal/disclosure" class="underline">Legal Disclosure</NuxtLink></li>
              <li><NuxtLink to="/legal/cookie-policy" class="underline">Cookie Policy</NuxtLink></li>
            </ul>
            <div class="w-full text-sm">
              Copyright &copy; 2022 UniteLabs. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { consent } = useConsent();

const showConsentBanner = computed(() => !consent.value && !route.path.startsWith('/legal/'));
</script>
