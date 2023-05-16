import { GraphQLList } from "graphql";
import { PostType } from "../types/PostType";
import { Comments } from "../../entities/Comments";

export const GET_COMMENTS = {
    type: new GraphQLList(PostType),
    resolve(): any{
        return Comments.find();
    }
}