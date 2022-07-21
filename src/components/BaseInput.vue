<script lang="ts" setup>
import { defineComponent } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: undefined,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const { value, errorMessage } = useField(props.name);
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<template>
  <label class="flex flex-col">
    <span v-if="label" class="mb-1">{{ label }}</span>
    <input
      class="px-4 py-2 border rounded outline-none transition-all duration-200 ring-offset-1 focus:ring-1"
      :class="[
        errorMessage
          ? 'border-danger focus:ring-danger'
          : 'border-slate-300 focus:ring-primary',
        { 'w-full': fullWidth },
      ]"
      v-model="value"
      v-bind="$attrs"
    />
    <span class="text-sm text-danger mt-0.5 h-[20px]">
      {{ errorMessage }}
    </span>
  </label>
</template>
