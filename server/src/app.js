const express = require("express");
require("dotenv").config();
const { DBConfig } = require("./DBConfig");
const { ApolloServer, gql } = require("apollo-server-express");

const { PORT = 4000 } = process.env;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

DBConfig();
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });
});

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
