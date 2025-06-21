import { gql } from '@apollo/client';

export const GET_MENUS = gql`
    query {
        menuItems(where: {location: PRIMARY}) {
            nodes {
            id
            label
            url
            }
        }
    }

`