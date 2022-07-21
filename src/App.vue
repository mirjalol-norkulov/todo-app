<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/store/todo";
import BaseButton from "@/components/BaseButton.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoAddModal from "@/components/TodoAddModal.vue";
import TodoEditModal from "./components/TodoEditModal.vue";

const todoStore = useTodoStore();

const STORAGE_KEY = "TODO_APP_VUE_3";

todoStore.$state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

todoStore.$subscribe((mutation, state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
});

const showAddModal = ref(false);
</script>

<template>
  <div class="bg-gray-50 w-screen h-screen flex justify-center">
    <main class="w-1/2 flex-col flex justify-center flex-col h-full space-y-4">
      <header class="w-full flex items-center before:flex-1">
        <h1 class="text-2xl uppercase font-black leading-3">Todo App</h1>
        <section class="flex-1 flex justify-end">
          <BaseButton color="primary" @click="showAddModal = true">
            Add new
          </BaseButton>
        </section>
      </header>
      <section class="h-4/6 overflow-y-auto">
        <TodoList />
      </section>
      <TodoFilter />
    </main>
    <TodoAddModal :show="showAddModal" @close="showAddModal = false" />
    <TodoEditModal
      :show="!!todoStore.currentEditingTodo"
      :todo="todoStore.currentEditingTodo"
      @close="todoStore.currentEditingTodo = null"
    />
  </div>
</template>
