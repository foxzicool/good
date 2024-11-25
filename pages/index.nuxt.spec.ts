import { expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Index from '@/pages/index.vue';

it('does not throw error', async () => {
  const wrapper = async () => await mountSuspended(Index, { route: '/' });
  expect(wrapper).not.toThrow();
});
