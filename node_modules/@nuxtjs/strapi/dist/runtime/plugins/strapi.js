import { useStrapiAuth } from "../composables/useStrapiAuth.js";
import { useStrapiUser } from "../composables/useStrapiUser.js";
import { defineNuxtPlugin } from "#imports";
export default defineNuxtPlugin(async () => {
  const user = useStrapiUser();
  if (!user.value) {
    const { fetchUser } = useStrapiAuth();
    await fetchUser();
  }
});
