// ref: https://github.com/nuxt/test-utils/blob/main/examples/app-playwright/playwright.config.ts
import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import type { ConfigOptions } from '@nuxt/test-utils/playwright';

const testDir = defineBddConfig({
  paths: ['./features/**/*.feature'],
  require: ['./features/stepDefinitions/**/*.ts'],
});

const desktopViewport = { width: 1280, height: 720 };

const isCI = !!process.env.CI;

/* See https://playwright.dev/docs/test-configuration. */
export default defineConfig<ConfigOptions>({
  testDir,
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,

  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',

    /* Nuxt configuration options */
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
  },

  /*
   * See https://playwright.dev/docs/test-projects.
   * Update .github/workflows/ci.yml's env.E2E_DEVICES JSON string for CI to install respective browsers.
   */
  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: desktopViewport,
      },
    },

    ...(isCI // Disable safari in CI; See WEB-82
      ? []
      : [
          {
            name: 'Mobile Safari',
            use: {
              ...devices['iPhone 11'],
              viewport: { width: 414, height: 896 },
            },
          },
          {
            name: 'Desktop Safari',
            use: {
              ...devices['Desktop Safari'],
              viewport: desktopViewport,
            },
          },
        ]),
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'yarn nuxi build && yarn nuxi preview',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !isCI,
  },
});
