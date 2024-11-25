import type { Meta, StoryFn } from '@storybook/vue3';
import ThMenu from '~/components/ThMenu.vue';
import type { ThMenuProps } from '~/components/types';

const meta: Meta<ThMenuProps> = {
  title: 'Components/ThMenu',
  component: ThMenu,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of menu items with subitems',
    },
    location: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end', 'center'],
      description: 'Menu anchor location',
    },
  },
};

export default meta;

const Template: StoryFn<ThMenuProps> = (args) => ({
  components: { ThMenu },
  setup() {
    return { args };
  },
  template: '<ThMenu v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Option 1', subItems: [{ title: 'Sub 1-1' }, { title: 'Sub 1-2' }] },
    { title: 'Option 2', subItems: [{ title: 'Sub 2-1' }, { title: 'Sub 2-2' }] }
  ],
};
