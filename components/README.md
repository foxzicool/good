# Components

> https://nuxt.com/docs/guide/directory-structure/components

## Configuration

See values under `components` in [nuxt.config.ts](../nuxt.config.ts).

## Guidelines

### Mounting Components

Use `mountSuspended()` to mount in Nuxt's environment.

```ts
// example
import { mountSuspended } from '@nuxt/test-utils/runtime';

it('is some test', async () => {
  const options = {
    /* ...omitted */
  };
  const wrapper = await mountSuspended(ThButton, options);
  expect(wrapper.text()).toMatch(label);
});
```
