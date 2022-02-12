"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type User {
    id: ID
    name: String!
    pass: String!
    followers: [User]
  }
  type Query {
    ME(id: ID): User!
    users: [User!]!
    hello(name: String): String!
  }
  input CreateUserInput {
    name: String!
    pass: String!
  }
  type Mutation {
    addUser(input: CreateUserInput): Boolean
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=type-defs.js.map