<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import BaseButton from "./components/BaseButton.vue";
import { useTodoStore } from "./store/todo";
import { watch } from "vue";
import TodoFilter from "./components/TodoFilter.vue";

const todoStore = useTodoStore();

const STORAGE_KEY = "TODO_APP_VUE_3";

todoStore.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

watch(todoStore.todos, () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoStore.todos));
});
</script>

<template>
  <div class="bg-gray-50 w-screen h-screen flex justify-center">
    <main class="w-1/2 flex-col flex justify-center flex-col h-full space-y-4">
      <header class="w-full flex items-center before:flex-1">
        <h1 class="text-2xl uppercase font-black leading-3">Todo App</h1>
        <section class="flex-1 flex justify-end">
          <BaseButton> Add new </BaseButton>
        </section>
      </header>
      <section class="h-4/6 overflow-y-auto">
        <TodoList />
      </section>
      <TodoFilter />
    </main>
  </div>
</template>
