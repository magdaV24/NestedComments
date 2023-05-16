import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { CommentType } from "../types/CommentType";
import { Comments } from "../../entities/Comments";

export const CREATE_COMMENT = {
  type: CommentType,
  args: {
    createdby: { type: GraphQLInt },
    postid: { type: GraphQLInt },
    content: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { createdby, postid, content } = args;
    await Comments.insert({ createdby, postid, content });
    return args;
  },
};

export const DELETE_COMMENT = {
  type: CommentType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(args: any) {
    const id = args.id;
    await Comments.delete(id)
  },
}
