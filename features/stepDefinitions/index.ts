import { expect } from '@nuxt/test-utils/playwright';
import { createBdd } from 'playwright-bdd';

const { Then, When } = createBdd();

When('I visit {string}', async ({ page }, path: string) => {
  await page.goto(path, { waitUntil: 'domcontentloaded' });
});

Then('I can see title {string}', async ({ page }, title: string) => {
  await expect(page).toHaveTitle(title);
});
