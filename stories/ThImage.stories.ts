import type { Meta, StoryFn } from '@storybook/vue3';
import ThImage from '~/components/ThImage.vue';
import type { ThImageProps } from '~/components/types';

const meta: Meta<ThImageProps> = {
  title: 'Components/ThImage',
  component: ThImage,
  argTypes: {
    src: {
      description: 'The source URL of the image',
      control: { type: 'text' },
    },
    height: {
      description: 'The height of the image',
      control: { type: 'text' },
    },
    width: {
      description: 'The width of the image',
      control: { type: 'text' },
    },
    alt: {
      description: 'Alternative text for SEO purposes',
      control: { type: 'text' },
    },
  },
};

export default meta;

const Template: StoryFn<ThImageProps> = (args) => ({
  components: { ThImage },
  setup() {
    return { args };
  },
  template: '<ThImage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://nuxt.com/icon.png',
  height: '200px',
  width: '299px',
};
