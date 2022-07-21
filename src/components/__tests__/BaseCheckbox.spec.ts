import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCheckbox from "../BaseCheckbox.vue";

test("it renders correctly", async () => {
  expect(BaseCheckbox).toBeTruthy();
});

test("it renders label", () => {
  const wrapper = mount(BaseCheckbox, { props: { label: "Is completed" } });
  expect(wrapper.text()).toContain("Is completed");
});

test("it changes label position", () => {
  const wrapper = mount(BaseCheckbox, {
    props: { label: "Is completed", labelPosition: "left" },
  });

  expect(wrapper.element.className).toContain("flex-row-reverse");
});
