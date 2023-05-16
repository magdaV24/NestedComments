import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { PostType } from "../types/PostType";
import { Posts } from "../../entities/Posts";

export const CREATE_POST = {
  type: PostType,
  args: {
    createdby: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { createdby, title, content } = args;
    await Posts.insert({ createdby, title, content });
    return args;
  },
};

export const DELETE_POST = {
  type: PostType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Posts.delete(id)
  },
}