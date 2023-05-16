import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String, $password: String, $email: String) {
    createUser(username: $username, password: $password, email: $email) {
      username
      password
      email
    }
  }
`;

export const FIND_USER = gql`
    mutation Login($username: String!, $password: String!){
        getUser(username: $username, password: $password){
            id
            username
            password
            email
            token
        }
    }
`

export const CREATE_POST = gql`
  mutation createPost($createdby: Int, $title: String, $content: String) {
    createPost(createdby: $createdby, title: $title, content: $content) {
      createdby
      title
      content
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($createdby: Int, $postid: Int, $content: String){
    createComment(createdby: $createdby, postid: $postid, content: $content){
      createdby
      postid
      content
    }
  }
`

export const CREATE_CHILD = gql`
  mutation createChild($createdby: Int, $postid: Int, $parentid: Int, $content: String){
    createChild(createdby: $createdby, postid: $postid, parentid: $parentid, content: $content){
      createdby
      postid
      parentid
      content
    }
  }
`