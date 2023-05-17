import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const CommentType = new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        id: { type: GraphQLID },
        createdby: { type: GraphQLInt},
        postid: { type: GraphQLInt},
        content: { type: GraphQLString },
        parentid: { type: GraphQLInt }
    })
})