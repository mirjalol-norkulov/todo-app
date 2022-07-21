import { v4 as uuidv4 } from "uuid";
import { flushPromises, mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import TodoForm from "../TodoForm.vue";

test("it renders correctly", () => {
  expect(TodoForm).toBeTruthy();
});

test("it renders inputs", () => {
  const wrapper = mount(TodoForm);

  expect(wrapper.get('[data-test="todo-text-input"]')).toBeTruthy();
  expect(wrapper.get('[data-test="todo-date-input"]')).toBeTruthy();
  expect(wrapper.get('[data-test="todo-checkbox"]')).toBeTruthy();
});
