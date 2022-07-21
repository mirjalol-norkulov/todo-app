<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import TodoListItem from "./TodoListItem.vue";
const todoStore = useTodoStore();
</script>

<template>
  <div class="bg-white rounded">
    <TodoListItem
      v-for="(todo, idx) in todoStore.filteredTodos"
      :key="idx"
      :todo="todo"
    />
  </div>
</template>
