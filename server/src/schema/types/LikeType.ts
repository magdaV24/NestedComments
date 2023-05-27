import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLObjectType } from "graphql";

export const LikeType = new GraphQLObjectType({
    name: "Like",
    fields: () => ({
        id: { type: GraphQLID },
        commentid: { type: GraphQLInt},
        userid: { type: GraphQLInt},
        liked: { type: GraphQLBoolean },
    })
})