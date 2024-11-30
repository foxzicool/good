import { useRuntimeConfig } from "#imports";
export const useStrapiVersion = () => {
  const config = import.meta.server ? useRuntimeConfig() : useRuntimeConfig().public;
  return config.strapi.version;
};
