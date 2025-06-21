/**
 * This section retrieves dynamically added products, featured products, and products by categories from the WP Dashboard
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
      }
    }
  }
`
export const GET_SINGLE_PRODUCT = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      name
      slug
      description
      shortDescription
      sku
      image {
        sourceUrl
        altText
      }
      galleryImages {
        nodes {
          sourceUrl
          altText
        }
      }

      ... on SimpleProduct {
        price(format: RAW)
        regularPrice(format: RAW)
        stockStatus
        stockQuantity
      }

      ... on VariableProduct {
        price(format: RAW)
        stockStatus
        stockQuantity
        variations(first: 50) {
          nodes {
            id
            sku
            stockStatus
            stockQuantity
            attributes {
              nodes {
                name
                value
              }
            }
            price(format: RAW)
          }
        }
      }

      ... on ExternalProduct {
        price(format: RAW)
        externalUrl
      }
    }
  }
`;
