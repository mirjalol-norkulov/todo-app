<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: "md",
    validator(val: string) {
      return ["sm", "md", "lg"].includes(val);
    },
  },
  color: {
    type: String,
    default: "primary",
    validator(val: string) {
      return ["primary", "danger"].includes(val);
    },
  },
});
</script>

<template>
  <button
    class="px-4 py-2 rounded-sm transition-all duration-300 text-white transform active:scale-[0.95]"
    :class="{
      'px-2 py-1': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-5 py-3': size === 'lg',
      'bg-primary hover:bg-primary-dark': color === 'primary',
      'bg-danger hover:bg-danger-dark': color === 'danger',
    }"
  >
    <slot />
  </button>
</template>
