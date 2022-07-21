import { mount, flushPromises } from "@vue/test-utils";
import { beforeEach, expect, test, vi } from "vitest";
import { ref } from "vue";
import BaseModal from "../BaseModal.vue";

beforeEach(() => {
  const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  }));
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
});

test("it renders correctly", () => {
  expect(BaseModal).toBeTruthy();
});

test("it renders title", async () => {
  const wrapper = mount(BaseModal, {
    props: { show: true, title: "Dialog title" },
  });
  await flushPromises();

  expect(document.querySelector('[data-test="modal-title"]')?.textContent).toBe(
    "Dialog title"
  );
});
