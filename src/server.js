import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // this is for development purposes only
});

export default server;