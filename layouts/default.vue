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
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { consent } = useConsent();

const showConsentBanner = computed(() => !consent.value && !route.path.startsWith('/legal/'));
</script>
