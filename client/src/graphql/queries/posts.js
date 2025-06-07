import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    posts(first: 1) {
      nodes {
        id
        title
        content
      }
    }
  }
`;
