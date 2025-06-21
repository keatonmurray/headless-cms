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

        ... on SimpleProduct {
          id
          name
          price
          featuredImage {
            node {
              sourceUrl
            }
          }
        }

        ... on VariableProduct {
          id
          name
          price
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
