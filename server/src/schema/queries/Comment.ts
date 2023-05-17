import { GraphQLInt, GraphQLList } from "graphql";
import { Comments } from "../../entities/Comments";
import { CommentType } from "../types/CommentType";

export const GET_COMMENTS = {
    type: new GraphQLList(CommentType),
    resolve(): any{
        return Comments.find();
    }
}

export const GET_POST_COMMENTS = {
    type: new GraphQLList(CommentType),
    args: {
        postid: { type: GraphQLInt },
        parentid: { type: GraphQLInt } 
    },
    resolve: async (parent: any, args: any) => {
        const { postid, parentid } = args;
        return Comments.find({where: { postid, parentid }});
    }
}