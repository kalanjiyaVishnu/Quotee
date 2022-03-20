"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
require("reflect-metadata");
const UserResolver_1 = require("./resolvers/UserResolver");
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
const type_graphql_1 = require("type-graphql");
(0, dotenv_1.config)();
const main = async () => {
    const app = (0, express_1.default)();
    await (0, mongoose_1.connect)(process.env.MONGO_URI);
    const server = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [UserResolver_1.UserResolver],
            validate: false,
        }),
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(4000, () => console.log("server running http://localhost:4000/graphql"));
};
main();
//# sourceMappingURL=index.js.map