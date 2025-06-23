/**
 * This query retrieves dynamically added nav menus from the WP Dashboard 
 */

import { gql } from '@apollo/client';

export const GET_MENUS = gql`
  query GetPrimaryMenu {
    menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        label
        url
        connectedNode {
          node {
            __typename
            ... on Page {
              id
              title
              uri
            }
            ... on ProductCategory {
              id
              name
              uri
            }
          }
        }
      }
    }
  }
`;
