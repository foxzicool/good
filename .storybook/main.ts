import type { StorybookConfig } from '@storybook/vue3-vite';
import { resolve } from 'node:path';
import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VuetifyPlugin from 'vite-plugin-vuetify';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|vue)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],

  framework: '@storybook/vue3-vite',

  viteFinal: (config) =>
    mergeConfig(config, {
      plugins: [vue(), VuetifyPlugin()],
      resolve: {
        alias: { '~': resolve(__dirname, '..') },
      },
      css: {
        preprocessorOptions: {
          scss: {
            // Ref: https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
            api: 'modern-compiler',
          },
        },
      },
    }),

  docs: {
    autodocs: true,
  },
};

export default config;
