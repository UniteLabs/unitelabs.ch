<template>
  <button
    class="flex justify-center px-4 py-2 gap-2 rounded"
    :class="{
        'border border-teal-600 text-teal-600': props.outline,
        'bg-teal-600 text-white': !props.outline,
    }"
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    @click="$emit('click')"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  outline?: boolean;
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  }
}>();
</script>
