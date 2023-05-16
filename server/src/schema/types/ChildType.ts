import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const ChildType = new GraphQLObjectType({
    name: "Child",
    fields: () => ({
        id: { type: GraphQLID },
        createdby: { type: GraphQLInt},
        parentid: { type: GraphQLInt},
        postid: { type: GraphQLInt},
        content: { type: GraphQLString },
    })
})