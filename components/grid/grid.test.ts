import { describe } from 'vitest';
import * as common from '../__test__/common';
import ThContainer from './ThContainer.vue';
import ThRow from './ThRow.vue';
import ThCol from './ThCol.vue';

const components = { ThContainer, ThRow, ThCol };
Object.entries(components).forEach(([name, Component]) => {
  describe(`<${name} />`, () => {
    common.itAcceptsDefaultSlot(Component, {});
    common.itMergesClass(Component, {});
    common.itMergesStyle(Component, {});
  });
});
