import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import ThCard from './ThCard.vue';
import * as common from './__test__/common';

describe('<ThCard />', () => {
  const props = { title: 'Some Title' };

  common.itAcceptsDefaultSlot(ThCard, { props });
  common.itMergesClass(ThCard, { props });
  common.itMergesStyle(ThCard, { props });

  it('has title', async () => {
    const wrapper = await mountSuspended(ThCard, { props });
    expect(wrapper.text()).toContain(props.title);
  });

  it('has image', async () => {
    const withImgSrcProps = { ...props, imgSrc: 'https://nuxt.com/icon.png' };
    const wrapper = await mountSuspended(ThCard, { props: withImgSrcProps });
    const image = wrapper.find('[data-test="image"]');
    expect(image.isVisible()).toBe(true);
  });
});
