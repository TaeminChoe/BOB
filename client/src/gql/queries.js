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

export const STORE_GET = gql`
  query Stores {
    stores {
      name
      img_url
      store_id
      description
    }
  }
`;

export const STORE_DETAIL_GET = gql`
  query Store($storeId: ID!) {
    store(id: $storeId) {
      address
      name
      phone_number
      description
      img_url
      store_id
    }
  }
`;

export const STORE_DELETE = gql`
  mutation DeleteStore($deleteStoreId: String!) {
    deleteStore(id: $deleteStoreId) {
      succeed
    }
  }
`;

export const STORE_CREATE = gql`
  mutation RegistStore($input: StoreInput!) {
    registStore(input: $input) {
      succeed
    }
  }
`;
