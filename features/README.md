# E2E Specs

## Tools

- Runner [playwright](https://playwright.dev/docs/intro)
- Spec format [cucumber](https://github.com/cucumber/cucumber-js)
- Generator (cucumber `*.feature` specs -> playwright test cases) [playwright-bdd](https://vitalets.github.io/playwright-bdd/)

## Steps

1. Write specs in [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/)
2. Add [step definition](https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/step_definitions.md) to `stepDefinition/` if necessary
3. `$ yarn test:e2e`

## Debugging

`$ yarn test:e2e --ui`
