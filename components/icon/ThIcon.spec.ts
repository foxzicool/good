import { describe } from 'vitest';
import ThIcon from './ThIcon.vue';
import * as common from '../__test__/common';
import type { ThIconProps } from '../types';

describe('<ThIcon />', () => {
  const options: { props: ThIconProps } = {
    props: { icon: 'mdi-menu-down' },
  };
  common.itMergesClass(ThIcon, options);
  common.itMergesStyle(ThIcon, options);
});
