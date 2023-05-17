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
export const FIND_USER_BY_ID = gql`
  query getUserById($id: Int) {
    getUserById(id: $id) {
      username
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($postid: Int) {
    getPostComments(postid: $postid) {
      id
      content
      postid
      createdby
      parentid
    }
  }
`;
