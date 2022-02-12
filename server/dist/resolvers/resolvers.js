"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const users = [
    { name: "vishnu", pass: "adsf", followers: [2, 3], id: 1 },
    { name: "vishnu", pass: "adsf", followers: [1], id: 2 },
    { name: "vishnu", pass: "adsf", followers: [2], id: 3 },
];
const resolvers = {
    Query: {
        users: () => {
            return users;
        },
        hello: (_, { name }) => {
            return `hello ${name || "world"}`;
        },
        ME: (_, { id }) => users.find((user) => user.id === Number(id)),
    },
    User: {
        followers: (parent) => {
            return parent.followers.map((follwerID) => users.find((user) => user.id == Number(follwerID)));
        },
    },
    Mutation: {
        addUser: (_, { input: { name, pass } }) => {
            users.push({ id: (0, uuid_1.v4)(), name, pass });
            return true;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map