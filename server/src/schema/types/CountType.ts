import { GraphQLObjectType, GraphQLInt } from "graphql";

export const CountType = new GraphQLObjectType({
    name: "Count",
    fields: () => ({
        count: { type: GraphQLInt},
    })
})