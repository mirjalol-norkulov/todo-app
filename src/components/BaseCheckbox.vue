<script setup lang="ts">
import CheckIcon from "@/assets/icons/check.svg";
import { computed, defineComponent } from "vue";

const props = defineProps({
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
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
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
      <input
        type="checkbox"
        class="peer hidden"
        v-bind="$attrs"
        v-model="value"
      />
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
