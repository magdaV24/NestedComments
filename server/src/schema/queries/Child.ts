import { GraphQLList } from "graphql";
import { PostType } from "../types/PostType";
import { Children } from "../../entities/Children";

export const GET_CHILDREN = {
    type: new GraphQLList(PostType),
    resolve(): any{
        return Children.find();
    }
}