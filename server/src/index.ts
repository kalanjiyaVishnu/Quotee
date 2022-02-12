import express from "express";
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { UserResolver } from "./resolvers/UserResolver";
import { connect } from "mongoose";
import { config } from "dotenv";
import { buildSchema } from "type-graphql";
config();

const main = async () => {
  const app = express();
  await connect(process.env.MONGO_URI as string);
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
  });

  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () =>
    console.log("server running http://localhost:4000/graphql")
  );
};
main();
