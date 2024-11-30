import { describe } from 'vitest';
import ThTypography from './ThTypography.vue';
import * as common from './__test__/common';

describe('<ThTypography />', () => {
  const props = { variant: 'h1' };
  common.itAcceptsDefaultSlot(ThTypography, { props });
  common.itMergesClass(ThTypography, { props });
  common.itMergesStyle(ThTypography, { props });
});
