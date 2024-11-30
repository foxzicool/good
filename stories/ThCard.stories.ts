import type { Meta, StoryFn } from '@storybook/vue3';
import ThButton from '~/components/ThButton.vue';
import ThCard from '~/components/ThCard.vue';
import ThTypography from '~/components/ThTypography.vue';
import type { ThCardProps } from '~/components/types';

const meta: Meta = {
  title: 'Components/ThCard',
  component: ThCard,
  argTypes: {
    title: { control: 'text' },
    imgSrc: {
      description: '(Optional) Image src',
      control: 'text',
    },
  },
};
export default meta;

const Template: StoryFn<ThCardProps> = (args) => ({
  components: { ThCard, ThTypography, ThButton },
  setup() {
    return { args };
  },
  template: `
    <ThCard v-bind="args">
      <ThTypography variant="p">Some text.</ThTypography>
      <ThButton label="Click Me" icon="arrow_right" />
    </ThCard>
  `,
});

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Some Title',
  imgSrc: 'https://nuxt.com/icon.png',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Some Title',
};
