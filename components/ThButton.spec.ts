import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import ThButton from './ThButton.vue';
import * as common from './__test__/common';
import type { icons } from './icon';

describe('<ThButton />', () => {
  const label = 'some text';
  const options: {
    props: {
      label: string;
      icon: (typeof icons)[number];
    };
  } = {
    props: { label, icon: 'arrow_right' },
  };

  common.itMergesClass(ThButton, options);
  common.itMergesStyle(ThButton, options);

  it('has label', async () => {
    const wrapper = await mountSuspended(ThButton, options);
    expect(wrapper.text()).toMatch(label);
  });

  it('shows icon', async () => {
    const wrapper = await mountSuspended(ThButton, options);
    const iconClassName = '.th-icon';
    expect(wrapper.get(iconClassName).isVisible()).toBe(true);
  });
});
