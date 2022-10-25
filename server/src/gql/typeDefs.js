const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum Auth {
    admin
    client
  }

  type User {
    id: String!
    m_date: String!
    pw: String!
    name: String!
    auth: Auth!
  }

  type Notice {
    id: Int!
    m_date: String!
    description: String!
    title: String!
  }

  type Store {
    address: String!
    name: String!
    m_date: String!
    phone_number: String!
    description: String!
    img_url: String!
  }

  type Query {
    getStoreAll: [Store]
    getStoreByKey: Store
    getNoticeAll: [Notice]
    getNoticeByKey: Notice
    getUserAll: [User]
    getUserByKey: User
  }
`;

module.exports = typeDefs;
