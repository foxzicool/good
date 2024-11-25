import type { Meta, StoryFn } from '@storybook/vue3';
import ThLink from '~/components/ThLink.vue';
import type { ThLinkProps } from '~/components/types';

const meta: Meta<ThLinkProps> = {
  title: 'Components/ThLink',
  component: ThLink,
  argTypes: {
    to: {
      description: 'The destination URL of the link',
      control: { type: 'text' },
    },
    external: {
      description: 'Marks the link as external and applies rel="noopener noreferrer"',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: StoryFn<ThLinkProps> = (args) => ({
  components: { ThLink },
  setup() {
    return { args };
  },
  template: '<ThLink v-bind="args">Click here</ThLink>',
});

export const Default = Template.bind({});
Default.args = {
  to: 'https://nuxt.com',
  external: true,
};
