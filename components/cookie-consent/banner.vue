<template>
  <div class="fixed inset-0 z-50 min-w-app">
    <div class="absolute inset-0 bg-black/50"></div>
    <div
      class="absolute inset-x-0 bottom-0 max-h-[80%] rounded-t py-8 space-y-4 overflow-auto bg-white text-gray-600"
    >
      <div
        class="container flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center text-[14px]"
      >
        <div class="space-y-4">
          <h1 class="text-[20px]">We value your privacy</h1>
          <p>
            This website stores cookies on your computer. These cookies are used
            to collect information about how you interact with our website and
            allow us to remember you. We use this information in order to
            improve and customize your browsing experience and for analytics and
            metrics about our visitors both on this website and other media. To
            find out more about the cookies we use, see our
            <NuxtLink to="/legal/cookie-policy" class="text-teal-600 underline"
              >cookie policy</NuxtLink
            >.
          </p>
        </div>
        <div class="w-full space-y-4">
          <btn class="w-full" @click="acceptAll">I accept all cookies</btn>
          <btn
            v-show="!showPreference"
            class="w-full"
            outline
            @click="showPreference = true"
            >Manage preferences</btn
          >
          <btn v-show="showPreference" class="w-full" outline @click="acceptSelection"
            >Save preferences</btn
          >
        </div>
      </div>
      <div
        v-show="showPreference"
        class="container flex flex-col gap-4 justify-center items-center text-[14px]"
      >
        <div class="w-full">
          <h2 class="flex text-[16px]">
            Strictly Necessary
            <span class="flex-1"></span>
            <Switch :defaultChecked="true" disabled
              >Allow necessary cookies</Switch
            >
          </h2>
          <p>
            Strictly necessary cookies are required to operate or deliver the
            service you requested from us and, therefore, do not require you to
            consent.
          </p>
        </div>
        <div class="w-full">
          <h2 class="flex text-[16px]">
            Functionality
            <span class="flex-1"></span>
            <Switch v-model="selection.functionality">Allow functionality cookies</Switch>
          </h2>
          <p>
            These cookies allow our websites to remember information that
            changes the way the site behaves or looks, such as your cookie
            preferences or your selected language.
          </p>
        </div>
        <div class="w-full">
          <h2 class="flex text-[16px]">
            Performance
            <span class="flex-1"></span>
            <Switch v-model="selection.performance">Allow performance cookies</Switch>
          </h2>
          <p>
            Performance cookies collect information about how users interact
            with our websites. They report site usage statistics without
            personally identifying individual visitors.
          </p>
        </div>
        <div class="w-full">
          <h2 class="flex text-[16px]">
            Targeting
            <span class="flex-1"></span>
            <Switch v-model="selection.targeting">Allow targeting cookies</Switch>
          </h2>
          <p>
            These cookies track visitors across different websites and other
            media. We use them to measure our marketing efforts and to make
            advertising more engaging to you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { consent } = useConsent();

const showPreference = ref(false);

const selection = reactive({
  functionality: false,
  performance: false,
  targeting: false,
});

onMounted(() => {
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.width = "100%";
});

onUnmounted(() => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
});

function acceptAll() {
  consent.value = {
    necessary: true,
    analytics: true,
    advertisement: true,
    functionality: true,
  };
}

function acceptSelection() {
  consent.value = {
    necessary: true,
    analytics: selection.performance,
    advertisement: selection.targeting,
    functionality: selection.functionality,
  };
}
</script>
