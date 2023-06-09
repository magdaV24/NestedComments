import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER, FIND_USER_BY_ID } from "./mutations/User";
import { CREATE_POST, DELETE_POST } from "./mutations/Post";
import { CREATE_COMMENT, DELETE_COMMENT, UPATE_CONTENT } from "./mutations/Comment";
import { GET_POSTS } from "./queries/Post";
import { GET_COMMENTS, GET_POST_COMMENTS } from "./queries/Comment";
import { FIND_USER } from "./queries/User";
import { COUNT_LIKES, GIVE_LIKE } from "./mutations/Like";
import { COUNT_DISLIKES, GIVE_DISLIKE } from "./mutations/Dislike";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getPosts: GET_POSTS,
    getComments: GET_COMMENTS,
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
    getUserById: FIND_USER_BY_ID,
    editContent: UPATE_CONTENT,
    giveLike: GIVE_LIKE,
    countLikes: COUNT_LIKES,
    giveDislike: GIVE_DISLIKE,
    countDislikes: COUNT_DISLIKES
  },
});

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
