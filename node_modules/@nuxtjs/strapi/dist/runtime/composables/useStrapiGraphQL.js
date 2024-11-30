import { print } from "graphql";
import { useStrapiClient } from "./useStrapiClient.js";
import { useRuntimeConfig } from "#imports";
export const useStrapiGraphQL = () => {
  const client = useStrapiClient();
  const config = import.meta.server ? useRuntimeConfig() : useRuntimeConfig().public;
  return (query, variables) => {
    const queryAsString = typeof query === "string" ? query : print(query);
    return client("/graphql", {
      method: "POST",
      body: {
        query: queryAsString,
        variables
      },
      headers: {
        accept: "application/json"
      },
      baseURL: config.strapi.url
    });
  };
};
