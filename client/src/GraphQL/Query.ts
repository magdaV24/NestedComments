import { gql } from "@apollo/client";

export const GET_POSTS = gql`
    query getPosts{
        getPosts{
            id
            title
            content
        }
    }
`