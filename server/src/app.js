const express = require("express");
require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");
const voyagerMiddleware = require("graphql-voyager/middleware");

const { PORT = 4000 } = process.env;
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });
});

app.listen({ port: PORT }, (res, req) => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});

app.get("/", (req, res) => {
  res.redirect("/graphql");
});

app.use("/voyager", voyagerMiddleware.express({ endpointUrl: "/graphql" }));
