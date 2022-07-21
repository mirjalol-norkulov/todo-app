import { v4 as uuidv4 } from "uuid";
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import TodoListItem from "../TodoListItem.vue";
import { createTestingPinia } from "@pinia/testing";

test("it renders correctly", () => {
  expect(TodoListItem).toBeTruthy();
});

test("it shows todo data", () => {
  const wrapper = mount(TodoListItem, {
    global: {
      plugins: [createTestingPinia()],
    },
    props: {
      todo: {
        id: uuidv4(),
        text: "Todo",
        dueDate: "2022-08-08",
        completed: true,
      },
    },
  });

  expect(wrapper.text()).toContain("Todo");
  expect(wrapper.text()).toContain("2022-08-08");
});
