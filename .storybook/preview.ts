import { setup } from '@storybook/vue3';
import { createVuetify } from 'vuetify';
import '~/assets/styles/_custom-vuetify.scss';
import vuetifyConfig from '../vuetify.config';

const vuetify = createVuetify(vuetifyConfig);

setup((app) => {
  app.use(vuetify);
});
