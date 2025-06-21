import { gql } from '@apollo/client';

export const GET_MENUS = gql`
    query {
        menuItems(where: {location: PRIMARY}) {
            nodes {
            id
            label
            url  # This is the full URL (e.g., https://yoursite.com/about)
            connectedNode {
                node {
                ... on Page {
                    id
                    title
                    uri  # This is the relative slug (e.g., "/about")
                }
                }
            }
            }
        }
    }
`