import type { Meta, StoryFn } from '@storybook/vue3';
import ThTypography from '~/components/ThTypography.vue';
import type { ThTypographyProps } from '~/components/types';

const meta: Meta = {
  title: 'Components/ThTypography',
  component: ThTypography,
  argTypes: {
    variant: {
      description: 'Typography variant',
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p'],
    },
  },
};
export default meta;

const Template: StoryFn<ThTypographyProps> = (args) => ({
  components: { ThTypography },
  setup() {
    return { args };
  },
  template: `
    <ThTypography v-bind="args">
      One church, many cities
    </ThTypography>
  `,
});

export const H1 = Template.bind({});
H1.args = { variant: 'h1' };

export const H2 = Template.bind({});
H2.args = { variant: 'h2' };

export const H3 = Template.bind({});
H3.args = { variant: 'h3' };

export const Paragraph = Template.bind({});
Paragraph.args = { variant: 'p' };
