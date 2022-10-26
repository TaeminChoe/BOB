import { gql } from "graphql-tag";

export const LOGIN = gql`
  query Login($loginId: String!, $pw: String!) {
    login(id: $loginId, pw: $pw) {
      id
      m_date
      pw
      name
      auth
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($input: UserInput!) {
    signUp(input: $input) {
      succeed
      error
      code
      message
    }
  }
`;
