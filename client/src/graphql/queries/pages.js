/**
 * This section retrieves dynamically added pages from the WP Dashboard 
 */

import { gql } from '@apollo/client';

export const GET_PAGE_BY_URI = gql`
  query GetPageByUri($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
      slug
      uri
    }
  }
`;