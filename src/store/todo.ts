import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    filter: "all" as Types.TodoFilter,
    todos: [
      { id: 1, text: "Todo 1", completed: false, dueDate: "2022-06-22" },
      { id: 2, text: "Todo 2", completed: true, dueDate: "2022-06-22" },
      { id: 3, text: "Todo 3", completed: false, dueDate: "2022-06-22" },
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
        id: this.todos.length + 1,
        ...payload,
      });
    },
    editTodo(id: number, payload: Types.TodoPayload) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...payload };
        }
        return todo;
      });
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
});
