import { mountSuspended } from '@nuxt/test-utils/runtime';
import { expect, it } from 'vitest';

type MountingOptions = Parameters<typeof mountSuspended>[1];

export function itAcceptsDefaultSlot(component: Component, options?: MountingOptions) {
  it('accepts default slot content', async () => {
    const stringSlot = 'hi';
    const htmlNodeSlot = h('div', 'hi');

    const testCases = [stringSlot, htmlNodeSlot].map(async (slot) => {
      const wrapper = await mountSuspended(component, {
        ...options,
        slots: { ...options?.slots, default: () => slot },
      });
      expect(wrapper.text()).toContain('hi');
    });
    await Promise.all(testCases);
  });
}

export function itMergesClass(component: Component, options?: MountingOptions) {
  it('merges inherited classes', async () => {
    const classNameString = 'some-class';
    const classNameArray = ['some-class'];

    const testCases = [classNameString, classNameArray].map(async (className) => {
      const wrapper = await mountSuspended(component, {
        ...options,
        props: { ...options?.props, class: className },
      });
      expect(wrapper.classes()).toContain('some-class');
    });
    await Promise.all(testCases);
  });
}

export function itMergesStyle(component: Component, options?: MountingOptions) {
  it('merges inherited inline styles', async () => {
    const style = { foo: 'bar' };
    const wrapper = await mountSuspended(component, {
      ...options,
      props: { ...options?.props, style },
    });
    expect(wrapper.element.style.foo).toBe(style.foo);
  });
}
