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

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($slug: [String]) {
    products(where: { categoryIn: $slug }) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
          altText
        }
        ... on SimpleProduct {
          price(format: RAW)
        }
        ... on VariableProduct {
          price(format: RAW)
        }
        ... on ExternalProduct {
          price(format: RAW)
        }
        ... on GroupProduct {
          price(format: RAW)
        }
      }
    }
  }
`
