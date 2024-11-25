import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import ThMenu from './ThMenu.vue';
import * as common from './__test__/common';

type Anchor = 'top' | 'bottom' | 'start' | 'end' | 'center';

describe('<ThMenu />', () => {
  const options = {
    props: {
      items: [
        { title: 'Main Item 1', subItems: [{ title: 'Sub Item 1' }] },
        { title: 'Main Item 2', subItems: [{ title: 'Sub Item 2' }] }
      ],
      location: 'end' as Anchor,
    },
    slots: {
      default: () => 'Default slot content',
    }
  };

  common.itMergesClass(ThMenu, options);
  common.itMergesStyle(ThMenu, options);
  common.itAcceptsDefaultSlot(ThMenu, options);

  it('displays default slot content', async () => {
    const wrapper = await mountSuspended(ThMenu, options);
    expect(wrapper.text()).toContain('Default slot content');
  });

  it('displays menu items correctly', async () => {
    const wrapper = await mountSuspended(ThMenu, options);
    expect(wrapper.text()).toContain('Main Item 1');
    expect(wrapper.text()).toContain('Main Item 2');
  });

  it('displays sub menu items when hovered', async () => {
    const wrapper = await mountSuspended(ThMenu, options);
    const subMenu = wrapper.findComponent({ name: 'SubItemMenu' });
    await subMenu.trigger('mouseenter');
    expect(subMenu.isVisible()).toBe(true);
  });
});
