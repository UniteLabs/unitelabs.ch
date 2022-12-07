<template>
  <div ref="element" class="h-screen snap-start flex flex-col justify-center items-center">
  <div class="container prose">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const element = ref<HTMLElement | null>(null);
const api = inject("SliderContext", null)

defineExpose({ element });
onMounted(() => api?.register(element));
</script>
