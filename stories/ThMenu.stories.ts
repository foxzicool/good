import type { StoryFn } from '@storybook/vue3';
import ThMenu from '~/components/ThMenu.vue';
import type { ThMenuProps } from '~/components/types';
import { icons } from '~/components/icon';

export default {
  title: 'Components/ThMenu',
  component: ThMenu,
  argTypes: {
    buttonLabel: {
      control: 'text',
      description: 'Label for the dropdown button',
    },
    icon: {
      type: 'enum',
      control: 'select',
      description: 'Icon to use for the button',
      options: icons,
    },
    items: {
      control: 'object',
      description:
        'Array of menu items with subitems, each item might include a "to", "external" and "icon" property for links and icons.',
    },
    location: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end', 'center'],
      description: 'Menu anchor location',
    },
  },
};

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
    {
      title: 'Main Option 1',
      to: 'https://nuxt.com',
      external: false,
      icon: 'menu',
      subItems: [
        {
          title: 'Suboption 1-1',
          to: 'https://nuxt.com',
          external: false,
          icon: 'menu',
        },
        {
          title: 'Suboption 1-2',
          to: 'https://nuxt.com',
          external: true,
          icon: 'menu',
          subItems: [
            { title: 'Sub-suboption 1-2-1', to: 'https://nuxt.com', external: false, icon: 'menu' },
            { title: 'Sub-suboption 1-2-2', to: 'https://nuxt.com', external: true, icon: 'menu' },
          ],
        },
      ],
    },
    {
      title: 'Main Option 2',
      to: 'https://nuxt.com',
      external: true,
      icon: 'menu',
      subItems: [
        {
          title: 'Suboption 2-1',
          to: 'https://nuxt.com',
          external: false,
          icon: 'menu',
        },
        {
          title: 'Suboption 2-2',
          to: 'https://nuxt.com',
          external: false,
          icon: 'menu',
        },
      ],
    },
  ],
  buttonLabel: '關於我們',
  location: 'top',
  icon: 'arrow_right',
};
