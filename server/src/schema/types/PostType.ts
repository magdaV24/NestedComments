import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: { type: GraphQLID },
        createdby: { type: GraphQLInt},
        title: { type: GraphQLString },
        content: { type: GraphQLString },
    })
})