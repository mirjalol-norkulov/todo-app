<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import BaseButton from "./BaseButton.vue";

const todoStore = useTodoStore();

const filters = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];
</script>

<template>
  <div class="flex items-center text-sm text-gray-500">
    <section class="flex-1">{{ todoStore.activeCount }} items left</section>
    <section class="flex space-x-2">
      <label v-for="(filter, idx) in filters" :key="idx" class="cursor-pointer">
        <input
          v-model="todoStore.filter"
          type="radio"
          :value="filter.value"
          name="filter"
          class="peer hidden"
        />
        <span
          class="p-1 rounded border border-transparent transition-all duration-200 peer-checked:border-primary-light hover:border-primary-light"
        >
          {{ filter.label }}
        </span>
      </label>
    </section>
    <section class="flex-1 flex justify-end">
      <BaseButton size="sm" @click="todoStore.clearCompleted">
        Clear completed
      </BaseButton>
    </section>
  </div>
</template>
