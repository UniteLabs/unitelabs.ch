<template>
  <div class="app">
    <LazyCookieConsentBanner v-if="showConsentBanner"></LazyCookieConsentBanner>

    <div class="flex min-w-app">
      <div class="flex-auto flex flex-col min-h-screen max-w-full relative">
        <!-- header -->
        <header class="bg-teal-900">
          <a href="#main" class="sr-only">Skip to content</a>
          <div class="container h-16 flex items-center">
            <NuxtLink to="/"><Logo class="h-12" /></NuxtLink>
            <div class="flex-1"></div>
            <a class="inline-flex items-center py-2 px-4 rounded no-underline bg-orange-600 text-white" href="mailto:info+website@unitelabs.ch">Get in Touch</a>
          </div>
        </header>

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
import Logo from "@/assets/img/logo-invert.svg?component";

const route = useRoute();
const { consent } = useConsent();

const showConsentBanner = computed(() => !consent.value && !route.path.startsWith('/legal/'));
</script>
