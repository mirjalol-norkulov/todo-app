import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import BaseInput from "../BaseInput.vue";

test("it renders correctly", () => {
  expect(BaseInput).toBeTruthy();
});

test("id renders label", () => {
  const wrapper = mount(BaseInput, { props: { name: "text", label: "Label" } });
  expect(wrapper.text()).toContain("Label");
});
