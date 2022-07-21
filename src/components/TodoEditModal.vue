<script lang="ts" setup>
import { useTodoStore } from "@/store/todo";
import TodoForm from "@/components/TodoForm.vue";
import BaseModal from "@/components/BaseModal.vue";

const props = defineProps<{ todo?: Types.Todo | null }>();
const emit = defineEmits(["close"]);

const todoStore = useTodoStore();

const handleSubmit = (payload: Types.TodoPayload) => {
  if (props.todo) {
    todoStore.editTodo(props.todo?.id, payload);
  }
  emit("close");
};
</script>

<template>
  <BaseModal title="Edit todo" @close="emit('close')">
    <TodoForm :todo="todo" @submit="handleSubmit" />
  </BaseModal>
</template>
