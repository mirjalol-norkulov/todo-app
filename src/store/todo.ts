import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    filter: "all" as Types.TodoFilter,
    todos: [
      { id: uuidv4(), text: "Todo 1", completed: false, dueDate: "2022-06-22" },
      { id: uuidv4(), text: "Todo 2", completed: true, dueDate: "2022-06-22" },
      { id: uuidv4(), text: "Todo 3", completed: false, dueDate: "2022-06-22" },
    ] as Types.Todo[],
    currentEditingTodo: null as Types.Todo | undefined | null,
  }),
  getters: {
    activeCount(state) {
      return state.todos.filter((todo) => !todo.completed).length;
    },
    completedCount(state): number {
      return state.todos.length - this.activeCount;
    },
    filteredTodos(state) {
      return state.todos.filter((todo) => {
        switch (state.filter) {
          case "all":
            return true;
          case "active":
            return !todo.completed;
          case "completed":
            return todo.completed;
          default:
            return true;
        }
      });
    },
  },
  actions: {
    addTodo(payload: Types.TodoPayload) {
      this.todos.push({
        id: uuidv4(),
        ...payload,
      });
    },
    editTodo(id: string, payload: Types.TodoPayload) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...payload };
        }
        return todo;
      });
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
});
