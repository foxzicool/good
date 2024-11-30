import type { DocumentNode } from 'graphql';
import type { StrapiGraphqlVariables } from '../types/index.js';
export declare const useStrapiGraphQL: () => <T>(query: string | DocumentNode, variables?: StrapiGraphqlVariables) => Promise<T>;
