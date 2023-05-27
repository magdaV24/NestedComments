import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { CommentType } from "../types/CommentType";
import { Comments } from "../../entities/Comments";

export const CREATE_COMMENT = {
  type: CommentType,
  args: {
    createdby: { type: GraphQLInt },
    postid: { type: GraphQLInt },
    content: { type: GraphQLString },
    parentid: { type: GraphQLInt },
    username: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { createdby, postid, content, parentid, username } = args;
    await Comments.insert({ createdby, postid, content, parentid, username });
    return args;
  },
};

export const DELETE_COMMENT = {
  type: CommentType,
  args: {
    id: {type: GraphQLInt}
  },
  async resolve(args: any) {
    const id = args.id;
    await Comments.delete(id)
  },
}

export const UPATE_CONTENT = {
  type: CommentType,
  args: {
    id: { type: GraphQLInt },
    newContent: { type: GraphQLString }
  },
  async resolve(parent: any,args: any){
    const { id, newContent } = args;
    const comment = await Comments.findOne({where: { id: id }});

    if(!comment){
      throw new Error("Comment doesn't exist!");
    }

    await Comments.update({id: id}, {content: newContent})

    return comment
  }
}