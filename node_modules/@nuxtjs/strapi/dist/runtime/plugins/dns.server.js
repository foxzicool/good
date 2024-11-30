import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin({
  parallel: true,
  async setup() {
    if (import.meta.dev) {
      try {
        const dns = await import("node:dns");
        await dns.setDefaultResultOrder("ipv4first");
      } catch (e) {
        console.error("Error importing dns module:", e);
      }
    }
  }
});
