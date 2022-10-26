import { gql } from "graphql-tag";

export const LOGIN = gql`
  query Login($id: String!, $pw: String!) {
    login(id: $id, pw: $pw) {
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
