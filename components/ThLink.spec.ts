import { describe } from 'vitest';
import ThLink from './ThLink.vue';
import * as common from './__test__/common';

describe('<ThLink />', () => {
  describe('with internal link', () => {
    const props = { to: '/' };
    common.itAcceptsDefaultSlot(ThLink, { props });
    common.itMergesClass(ThLink, { props });
    common.itMergesStyle(ThLink, { props });
  });

  describe('with external link', () => {
    const props = { to: 'https://www.google.com' };
    common.itAcceptsDefaultSlot(ThLink, { props });
    common.itMergesClass(ThLink, { props });
    common.itMergesStyle(ThLink, { props });
  });
});
