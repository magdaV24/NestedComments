import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { ChildType } from "../types/ChildType";
import { Children } from "../../entities/Children";

export const CREATE_CHILD = {
  type: ChildType,
  args: {
    createdby: { type: GraphQLInt },
    parentid: { type: GraphQLInt },
    postid: { type: GraphQLInt },
    content: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { createdby, parentid, postid, content } = args;
    await Children.insert({ createdby, parentid, postid, content });
    return args;
  },
};

export const DELETE_CHILD = {
  type: ChildType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Children.delete(id)
  },
}