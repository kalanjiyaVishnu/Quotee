"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const query = new graphql_1.GraphQLObjectType({
    name: "rootQuery",
    fields: {
        hello: {
            type: graphql_1.GraphQLString,
            args: {
                name: { type: graphql_1.GraphQLString },
            },
            resolve: (_, { name }) => (name ? `hello ${name}` : "hello world"),
        },
    },
});
exports.default = new graphql_1.GraphQLSchema({
    query,
});
//# sourceMappingURL=schema.js.map