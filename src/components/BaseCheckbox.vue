<script setup lang="ts">
import { useField } from "vee-validate";
import CheckIcon from "@/assets/icons/check.svg";

const props = defineProps({
  name: { type: String, default: "" },
  modelValue: { type: [Boolean, Array], default: undefined },
  label: { type: String, default: undefined },
  labelPosition: {
    type: String,
    default: "right",
    validator(val: string) {
      return ["left", "right"].includes(val);
    },
  },
});

const { value, errorMessage, handleBlur, handleChange, meta } = useField(
  props.name,
  undefined,
  {
    initialValue: props.modelValue,
  }
);
</script>

<template>
  <label
    class="inline-flex items-center"
    :class="[
      labelPosition === 'left' ? 'flex-row-reverse' : '',
      { 'space-x-2': !!label || $slots.default },
    ]"
  >
    <section
      class="border border-gray bg-white inline-block rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
    >
      <input type="checkbox" class="peer hidden" v-model="value" />
      <check-icon
        class="hidden peer-checked:inline text-green-300 w-6 h-6 transform -rotate-12"
      />
    </section>
    <section v-if="label || $slots.default" class="cursor-pointer select-none">
      <slot>
        {{ label }}
      </slot>
    </section>
  </label>
</template>
