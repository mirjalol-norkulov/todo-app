import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import TodoList from "../TodoList.vue";

test("it renders correctly", () => {
  expect(TodoList).toBeTruthy();
});

test("it renders items", () => {
  const wrapper = mount(TodoList, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  expect(
    wrapper.element.querySelectorAll('[data-test="todo-list-item"]').length
  ).toBe(3);
});
