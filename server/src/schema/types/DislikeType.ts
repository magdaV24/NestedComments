import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLObjectType } from "graphql";

export const DislikeType = new GraphQLObjectType({
    name: "dislike",
    fields: () => ({
        id: { type: GraphQLID },
        commentid: { type: GraphQLInt},
        userid: { type: GraphQLInt},
        disliked: { type: GraphQLBoolean },
    })
})