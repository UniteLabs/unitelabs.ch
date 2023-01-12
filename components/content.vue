<template>
  <component
    v-bind:is="$props.tag"
    class="prose prose-sm sm:prose-base lg:prose-xl mx-auto"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
export interface Props {
  tag?: string;
}

const props = withDefaults(defineProps<Props>(), { tag: "section" });
</script>
