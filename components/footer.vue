<template>
  <footer class="bg-teal-900 text-white">
    <div class="container py-4 text-center flex flex-wrap justify-between gap-4">
      <div class="w-full sm:w-auto">
        <NuxtLink to="/" class="h-full flex justify-center items-center px-4">
          <Logo class="h-11" />
        </NuxtLink>
      </div>
      <ul class="w-full sm:w-auto text-sm">
        <li class="block px-4 py-2">
          <NuxtLink to="/legal/disclosure" class="underline">
            Legal Disclosure
          </NuxtLink>
        </li>
        <li class="block px-4 py-2">
          <NuxtLink to="/legal/cookie-policy" class="underline">
            Cookie Policy
          </NuxtLink>
        </li>
      </ul>
      <div class="w-full text-xs">
        Copyright &copy; 2022 UniteLabs. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from "@/assets/img/logo-invert.svg?component";
</script>
