<template>
  <button
    class="flex justify-center px-4 py-2 gap-2 rounded"
    :class="{
        'border border-teal-600 text-teal-600': props.outline,
        'bg-teal-600 text-white': !props.outline,
    }"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  outline?: boolean;
}>();
</script>
