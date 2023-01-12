<template>
  <Switch
    :defaultChecked="false"
    class="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-teal-600 ui-not-checked:bg-gray-300"
  >
    <span class="sr-only"><slot></slot></span>
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1"
    />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";
</script>
