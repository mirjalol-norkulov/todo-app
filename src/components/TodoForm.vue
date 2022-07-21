<script lang="ts" setup>
import { useForm } from "vee-validate";
import { boolean, date, object, string } from "yup";
import BaseInput from "@/components/BaseInput.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseButton from "@/components/BaseButton.vue";

const props = defineProps<{ todo?: Types.Todo | null }>();
const emit = defineEmits(["submit"]);

const { handleSubmit } = useForm({
  initialValues: {
    text: props.todo?.text,
    completed: props.todo?.completed,
    dueDate: props.todo?.dueDate,
  },
  validationSchema: object({
    text: string().required().label("Text"),
    completed: boolean(),
    dueDate: date().required().label("Due date"),
  }),
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col space-y-3">
    <BaseInput
      name="text"
      data-test="todo-text-input"
      full-width
      label="Text"
    />
    <BaseInput
      name="dueDate"
      data-test="todo-date-input"
      type="date"
      full-width
      label="Due date"
    />
    <BaseCheckbox
      name="completed"
      data-test="todo-checkbox"
      label="Is completed"
    />

    <BaseButton type="submit" data-test="todo-save-btn" color="primary">
      Save
    </BaseButton>
  </form>
</template>
