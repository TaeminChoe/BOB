const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum Auth {
    admin
    client
  }

  type Response {
    succeed: Boolean!
    error: String
    code: Int
    message: String
  }

  type User {
    id: String
    m_date: String
    pw: String
    name: String
    auth: Auth
  }

  input UserInput {
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
    login(id: String!, pw: String!): User
  }

  type Mutation {
    signUp(input: UserInput!): Response
  }
`;

module.exports = typeDefs;

/**
 * USER : 회원가입, 로그인
 * STORE : 조회(전체, detail), 등록, 삭제
 * NOTICE : 조회(전체, detail), 등록, 삭제
 */
