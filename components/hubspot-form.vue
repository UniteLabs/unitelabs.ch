<template>
  <div ref="container" :id="id" v-once></div>
</template>

<script setup lang="ts">
declare global {
  interface Window {
    hbspt: any;
  }
}

const id = ref(
  new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
);

const container = ref<HTMLElement | null>(null);

const props = defineProps({
  portalId: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  formId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "load", form: HTMLFormElement): true;
}>();

onMounted(() => {
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: props.region,
      portalId: props.portalId,
      formId: props.formId,
      target: `#${container?.value?.getAttribute("id")}`,
      onFormReady(form: HTMLFormElement) {
        emit("load", form);
      },
    });
  } else {
    document.getElementById("hubspot-script")?.addEventListener("load", () => {
      window.hbspt.forms.create({
        region: props.region,
        portalId: props.portalId,
        formId: props.formId,
        target: `#${container?.value?.getAttribute("id")}`,
        onFormReady(form: HTMLFormElement) {
          emit("load", form);
        },
      });
    });
  }
});
</script>
