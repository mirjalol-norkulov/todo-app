import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import BaseButton from "../BaseButton.vue";

test("Renders correctly", () => {
  expect(BaseButton).toBeTruthy();

  const wrapper = mount(BaseButton, { slots: { default: "Hello" } });

  expect(wrapper.text()).toContain("Hello");
  expect(wrapper.html()).toMatchSnapshot();
});
