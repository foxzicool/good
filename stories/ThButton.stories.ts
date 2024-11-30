import type { StoryFn } from '@storybook/vue3';
import ThButton from '~/components/ThButton.vue';
import type { ThButtonProps } from '~/components/types';
import { icons } from '~/components/icon';

export default {
  title: 'Components/ThButton',
  component: ThButton,
  argTypes: {
    label: { control: 'text' },
    icon: {
      type: 'enum',
      control: 'select',
      description: '(Optional) Icon variant',
      options: icons,
    },
  },
};

const Template: StoryFn<typeof ThButton> = (args: ThButtonProps) => ({
  components: { ThButton },
  setup() {
    return { args };
  },
  template: '<ThButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Click Me',
  icon: 'arrow_right',
};
