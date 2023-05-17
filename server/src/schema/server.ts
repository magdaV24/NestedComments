import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER } from "./mutations/User";
import { CREATE_POST, DELETE_POST } from "./mutations/Post";
import { CREATE_COMMENT, DELETE_COMMENT } from "./mutations/Comment";
import { GET_POSTS } from "./queries/Post";
import { GET_COMMENTS, GET_POST_COMMENTS } from "./queries/Comment";
import { FIND_USER, FIND_USER_BY_ID } from "./queries/User";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getPosts: GET_POSTS,
    getComments: GET_COMMENTS,
    getUserById: FIND_USER_BY_ID,
    getPostComments: GET_POST_COMMENTS
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    createPost: CREATE_POST,
    createComment: CREATE_COMMENT,
    deletePost: DELETE_POST,
    deleteComment: DELETE_COMMENT,
    getUser: FIND_USER,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
