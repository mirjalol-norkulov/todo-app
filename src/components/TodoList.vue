<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import TodoListItem from "./TodoListItem.vue";
const todoStore = useTodoStore();
</script>

<template>
  <div
    class="bg-white rounded h-full flex flex-col"
    :class="{
      'items-center justify-center': todoStore.filteredTodos.length === 0,
    }"
    data-test="todo-list"
  >
    <TodoListItem
      v-for="(todo, idx) in todoStore.filteredTodos"
      :key="idx"
      :todo="todo"
    />
    <span v-if="todoStore.filteredTodos.length === 0" class="text-gray-400">
      No items
    </span>
  </div>
</template>
