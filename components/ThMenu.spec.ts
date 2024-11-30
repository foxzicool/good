import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import ThMenu from '~/components/ThMenu.vue';
import * as common from './__test__/common';

describe('<ThMenu />', () => {
  const items = [
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
          icon: 'menu'
        },
        {
          title: 'Suboption 1-2',
          to: 'https://nuxt.com',
          external: true,
          icon: 'menu',
          subItems: [
            { title: 'Sub-suboption 1-2-1', to: 'https://nuxt.com', external: false, icon: 'menu' },
            { title: 'Sub-suboption 1-2-2', to: 'https://nuxt.com', external: true, icon: 'menu' }
          ]
        }
      ]
    }
  ];

  const props = {
    items,
    location: 'top',
    buttonLabel: 'About Us',
    icon: 'arrow_right'
  };

  it('renders button with label and icon', async () => {
    const wrapper = await mountSuspended(ThMenu, { props });
    expect(wrapper.text()).toContain(props.buttonLabel);
    expect(wrapper.findComponent({ name: 'ThIcon' }).exists()).toBe(true);
  });

  common.itMergesClass(ThMenu, { props });
  common.itMergesStyle(ThMenu, { props });

//以下因為vuetify無法讀取到導致v-list-item沒有顯示
/*   describe('nested menu items', () => {
    it('renders all menu items with correct attributes and submenus', async () => {
      const wrapper = await mountSuspended(ThMenu, { props });
      console.log(wrapper.html());
      const listItems = wrapper.findAll('.v-list-item'); 
      expect(listItems.length).toBeGreaterThan(0);

      listItems.forEach((item, index) => {
        const flatItems = items.flatMap(item => [item].concat(item.subItems || []));
        const expectedItem = flatItems[index];
        expect(item.text()).toContain(expectedItem.title);
        if (expectedItem.icon) {
          expect(item.find('.th-icon').exists()).toBe(true);
        }
      });
    });
  }); */
});
