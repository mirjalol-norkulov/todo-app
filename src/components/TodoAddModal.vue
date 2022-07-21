<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import BaseModal from "@/components/BaseModal.vue";
import TodoForm from "@/components/TodoForm.vue";

const todoStore = useTodoStore();
const emit = defineEmits(["close"]);

const handleSubmit = (values: Types.TodoPayload) => {
  todoStore.addTodo(values);
  emit("close");
};
</script>

<template>
  <BaseModal title="Add todo" @close="emit('close')">
    <TodoForm @submit="handleSubmit" />
  </BaseModal>
</template>
