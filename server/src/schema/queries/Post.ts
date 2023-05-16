import { GraphQLList } from "graphql";
import { PostType } from "../types/PostType";
import { Posts } from "../../entities/Posts";

export const GET_POSTS = {
    type: new GraphQLList(PostType),
    resolve(): any{
        return Posts.find();
    }
}