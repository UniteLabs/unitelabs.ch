<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
  >
    <path stroke-linecap="round" stroke-linejoin="round" :d="path" />
  </svg>
</template>

<script setup>
const props = defineProps({
  name: String,
});

const path = computed(() => {
  switch (props.name) {
    case "objects-column":
      return "M5,4H9S10,4,10,5V11S10,12,9,12H5S4,12,4,11V5S4,4,5,4M5,16H9S10,16,10,17V19S10,20,9,20H5S4,20,4,19V17S4,16,5,16M15,4H19S20,4,20,5V7S20,8,19,8H15S14,8,14,7V5S14,4,15,4M15,12H19S20,12,20,13V19S20,20,19,20H15S14,20,14,19V13S14,12,15,12";
    case "bars-shifted":
      return "M12,8H20M4,12H20M12,16H4";
    case "exclamation-triangle":
      return "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
    case "signout":
      return "M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z";
    case "user":
      return "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z";
    case "xmark":
      return "M6,6L18,18M6,18L18,6";
  }
});
</script>
