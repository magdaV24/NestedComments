import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER } from "./mutations/User";
import { CREATE_POST, DELETE_POST } from "./mutations/Post";
import { CREATE_COMMENT, DELETE_COMMENT } from "./mutations/Comment";
import { CREATE_CHILD, DELETE_CHILD } from "./mutations/Child";
import { GET_POSTS } from "./queries/Post";
import { GET_COMMENTS } from "./queries/Comment";
import { GET_CHILDREN } from "./queries/Child";
import { FIND_USER } from "./queries/User";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getPosts: GET_POSTS,
    getComments: GET_COMMENTS,
    getChildren: GET_CHILDREN,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    createPost: CREATE_POST,
    createComment: CREATE_COMMENT,
    createChild: CREATE_CHILD,
    deletePost: DELETE_POST,
    deleteComment: DELETE_COMMENT,
    deleteChild: DELETE_CHILD,
    getUser: FIND_USER,
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
