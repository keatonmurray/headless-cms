/**
 * This query retrieves dynamically added products, featured products, and products by categories from the WP Dashboard
 */

import { gql } from '@apollo/client';

export const GET_FEATURED_PRODUCTS = gql`
  query {
    featuredProducts: products(
      where: {
        taxonomyFilter: {
          filters: [
            {
              taxonomy: PRODUCT_VISIBILITY
              terms: ["featured"]
              operator: IN
            }
          ]
        }
      }
    ) {
      nodes {
        __typename
        name
        slug
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        ... on SimpleProduct {
          price
        }
        ... on VariableProduct {
          variations(first: 1) {
            nodes {
              price(format: RAW)
            }
          }
        }
      }
    }
  }
`