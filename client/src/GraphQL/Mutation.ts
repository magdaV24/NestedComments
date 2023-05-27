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
  mutation Login($username: String!, $password: String!) {
    getUser(username: $username, password: $password) {
      id
      username
      password
      email
      token
    }
  }
`;

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
  mutation createComment(
    $createdby: Int
    $postid: Int
    $content: String
    $parentid: Int
    $username: String
  ) {
    createComment(
      createdby: $createdby
      postid: $postid
      content: $content
      parentid: $parentid
      username: $username
    ) {
      createdby
      postid
      content
      parentid
      username
    }
  }
`;
export const FIND_USER_BY_ID = gql`
  mutation getUserById($id: Int) {
    getUserById(id: $id) {
      username
    }
  }
`;

export const UPDATE_CONTENT = gql`
  mutation editContent($id: Int, $newContent: String) {
    editContent(id: $id, newContent: $newContent) {
      content
    }
  }
`;

export const GIVE_LIKE = gql`
  mutation giveLike($commentid: Int, $userid: Int) {
    giveLike(commentid: $commentid, userid: $userid) {
      liked
    }
  }
`;

export const COUNT_LIKES = gql`
  mutation countLikes($commentid: Int) {
    countLikes(commentid: $commentid) {
      count
    }
  }
`;

export const GIVE_DISLIKE = gql`
  mutation giveDislike($commentid: Int, $userid: Int) {
    giveDislike(commentid: $commentid, userid: $userid) {
      disliked
    }
  }
`;

export const COUNT_DISLIKES = gql`
  mutation countDislikes($commentid: Int) {
    countDislikes(commentid: $commentid) {
      count
    }
  }
`;