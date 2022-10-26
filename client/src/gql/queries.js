import { gql } from "graphql-tag";

export const LOGIN = gql`
  query Login($id: String!, $pw: String!) {
    login(id: $id, pw: $pw) {
      id
      date
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

export const NOTICE_GET = gql`
query Notices {
  notices {
    notice_id
    date
    description
    title
  }
}
`;

export const NOTICE_CREATE = gql`
  mutation RegistNotice($input: NoticeInput!) {
    registNotice(input: $input) {
      succeed
      error
      code
      message
    }
  }
`;

export const NOTICE_DELETE = gql`
  mutation DeleteNotice($deleteNoticeId: String!) {
    deleteNotice(id: $deleteNoticeId) {
      succeed
      error
      code
      message
    }
  }
`;