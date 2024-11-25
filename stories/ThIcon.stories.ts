import type { Meta, StoryFn } from '@storybook/vue3';
import ThIcon, { icons } from '~/components/icon';
import type { ThIconProps } from '~/components/types';

const meta: Meta = {
  title: 'Components/ThIcon',
  component: ThIcon,
  argTypes: {
    icon: {
      description: 'Icons variant',
      control: { type: 'select' },
      options: icons,
    },
  },
};
export default meta;

const Template: StoryFn<ThIconProps> = (args) => ({
  components: { ThIcon },
  setup() {
    return { args };
  },
  template: `<ThIcon v-bind="args" />`,
});

export const Icon = Template.bind({});
Icon.args = { icon: icons[0] };
