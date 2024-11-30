import { configDefaults, coverageConfigDefaults } from 'vitest/config';
import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    exclude: [...configDefaults.exclude, '.features-gen'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom',
      },
    },

    /**
     * NOTE: Silence ALL console logs & warns, for the below only happen in testing:
     * - Vue3 experimental suspense API (https://github.com/nuxt/nuxt/discussions/25973#discussioncomment-11246584)
     * - @nuxt/test-utils mountSuspended() warning about attributes fell through components
     */
    silent: true,

    coverage: {
      exclude: [...coverageConfigDefaults.exclude, '*.config.ts', 'features'],
    },
  },
});
