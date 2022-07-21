import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import TodoFilter from "../TodoFilter.vue";

test("it renders correctly", () => {
  expect(TodoFilter).toBeTruthy();
});

test("it renders filters", () => {
  const wrapper = mount(TodoFilter, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  expect(wrapper.get('[data-test="todo-filter-all"]')).toBeTruthy();
  expect(wrapper.get('[data-test="todo-filter-active"]')).toBeTruthy();
  expect(wrapper.get('[data-test="todo-filter-completed"]')).toBeTruthy();
});

test("it changes filter values", () => {
  const wrapper = mount(TodoFilter, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  const activeFilter = wrapper.get('[data-test="todo-filter-active"]');
  activeFilter.trigger("click");

  expect(activeFilter.get("input").element.getAttribute("value")).toBe(
    "active"
  );

  const completedFilter = wrapper.get('[data-test="todo-filter-completed"]');
  completedFilter.trigger("click");

  expect(completedFilter.get("input").element.getAttribute("value")).toBe(
    "completed"
  );

  const allFilter = wrapper.get('[data-test="todo-filter-all"]');
  allFilter.trigger("click");

  expect(allFilter.get("input").element.getAttribute("value")).toBe("all");
});
