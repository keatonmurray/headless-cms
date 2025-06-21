/**
 * This section retrieves dynamically added pages/categories from the WP Dashboard 
 */

import { gql } from '@apollo/client';

export const GET_PAGE_BY_URI = gql`
  query RESOLVE_NODE_BY_URI($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ... on ProductCategory {
        id
        name
        uri
        products(first: 100) {
          nodes {
            id
            name
            slug
            image {
              sourceUrl
              altText
            }
            __typename
            ... on SimpleProduct {
              price
            }
            ... on VariableProduct {
              price
            }
            ... on ExternalProduct {
              price
            }
          }
        }
      }
      ... on Page {
        id
        title
        uri
        content
      }
    }
  }
`;