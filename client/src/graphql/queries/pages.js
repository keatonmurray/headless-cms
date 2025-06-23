/**
 * This query retrieves dynamically added pages/categories/simple product from the WP Dashboard 
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
            uri
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

      ... on SimpleProduct {
        id
        name
        slug
        description
        shortDescription
        sku
        uri
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
        price(format: RAW)
        regularPrice(format: RAW)
        stockStatus
        stockQuantity
      }

      ... on VariableProduct {
        id
        name
        slug
        description
        shortDescription
        sku
        uri
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
        id
        name
        slug
        description
        shortDescription
        sku
        uri
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
        price(format: RAW)
        externalUrl
      }
    }
  }

`;