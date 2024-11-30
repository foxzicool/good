import type { ThemeDefinition } from 'vuetify';
import type { ExternalVuetifyOptions } from 'vuetify-nuxt-module';

const theHopeColors: ThemeDefinition = {
  colors: {
    'white': '#FFFFFF',
    'black': '#000000',
    'primary-900': '#423408',
    'primary-800': '#7C610F',
    'primary-700': '#AF8814',
    'primary-600': '#E1B225',
    'primary-500': '#FFCC32',
    'primary': '#FFCC32',
    'primary-400': '#FFE084',
    'primary-300': '#FFEBAD',
    'primary-200': '#FFF5D6',
    'primary-100': '#FFFAEB',
    'deep-blue-600': '#090C0E',
    'deep-blue-500': '#1D292E',
    'deep-blue': '#1D292E',
    'deep-blue-400': '#4A5458',
    'deep-blue-300': '#777F82',
    'deep-blue-200': '#A5A9AB',
    'deep-blue-100': '#D2D4D5',
    'deep-blue-50': '#F0F0F0',
    'midnight-blue-800': '#0C1114',
    'midnight-blue-700': '#182228',
    'midnight-blue-600': '#24323C',
    'midnight-blue-500': '#3C5464',
    'midnight-blue': '#3C5464',
    'midnight-blue-400': '#778793',
    'midnight-blue-300': '#9EAAB2',
    'midnight-blue-200': '#D8DDE0',
    'midnight-blue-100': '#ECEEF0',
  },
};

export default {
  theme: {
    defaultTheme: 'theHopeColors',
    themes: {
      theHopeColors,
    },
  },
} satisfies ExternalVuetifyOptions;
