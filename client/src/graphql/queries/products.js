import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products(first: 1) {
      nodes {
        __typename
        ... on SimpleProduct {
          id
          name
          price
          image {
            sourceUrl
          }
        }
      }
    }
}
`;
