const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum Auth {
    admin
    client
  }

  input UserInput {
    id: String!
    date: String!
    pw: String!
    name: String!
    auth: Auth!
  }

  input StoreInput {
    address: String!
    name: String!
    date: String!
    phone_number: String!
    description: String!
    img_url: String!
  }

  input NoticeInput {
    date: String!
    description: String!
    title: String!
  }

  type User {
    id: String
    date: String
    pw: String
    name: String
    auth: Auth
  }

  type Store {
    store_id: ID
    address: String
    name: String
    date: String
    phone_number: String
    description: String
    img_url: String
  }

  type Notice {
    notice_id: ID
    date: String
    description: String
    title: String
  }

  type Response {
    succeed: Boolean!
    error: String
    code: Int
    message: String
  }

  type Query {
    login(id: String!, pw: String!): User
    store(id: ID!): Store
    stores: [Store]
    notice(id: ID!): Notice
    notices: [Notice]
  }

  type Mutation {
    signUp(input: UserInput!): Response
    registStore(input: StoreInput!): Response
    deleteStore(id: String!): Response
    registNotice(input: NoticeInput!): Response
    deleteNotice(id: String!): Response
  }
`;

module.exports = typeDefs;
