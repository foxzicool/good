import { describe } from 'vitest';
import ThImage from './ThImage.vue';
import * as common from './__test__/common';

describe('<ThImage />', () => {
  const props = {
    src: 'https://nuxt.com/icon.png',
    height: '200px',
    width: '299px',
  };

  common.itMergesClass(ThImage, { props });
});
