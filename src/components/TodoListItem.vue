<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import EditIcon from "@/assets/icons/edit.svg";
import DeleteIcon from "@/assets/icons/delete.svg";
import { useTodoStore } from "@/store/todo";

const props = defineProps<{
  todo: Types.Todo;
}>();

const todoStore = useTodoStore();

const handleEdit = () => {
  todoStore.currentEditingTodo = props.todo;
};

const handleDelete = () => {
  todoStore.deleteTodo(props.todo.id);
};
</script>

<template>
  <div
    class="px-4 py-3 border-b border-solid border-gray-100 flex items-center justify-between"
    data-test="todo-list-item"
  >
    <section class="flex items-center space-x-2">
      <BaseCheckbox v-model="todo.completed" data-test="todo-checkbox">
        <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
      </BaseCheckbox>
      <span class="text-xs text-slate-400">{{ todo.dueDate }}</span>
    </section>
    <section class="flex space-x-1">
      <BaseButton size="sm" data-test="todo-edit-btn" @click="handleEdit">
        <EditIcon class="w-4 h-4" />
      </BaseButton>
      <BaseButton
        size="sm"
        color="danger"
        data-test="todo-delete-btn"
        @click="handleDelete"
      >
        <DeleteIcon class="w-4 h-4" />
      </BaseButton>
    </section>
  </div>
</template>
