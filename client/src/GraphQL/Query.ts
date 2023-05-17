import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      title
      content
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($postid: Int, $parentid: Int) {
    getPostComments(postid: $postid, parentid: $parentid) {
      id
      content
      postid
      createdby
      parentid
    }
  }
`;
