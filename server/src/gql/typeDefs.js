const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "사용자 권한 정보"
  enum Auth {
    "관리자"
    admin
    "이용자"
    client
  }

  "사용자 등록에 필요한 사용자 정보"
  input UserInput {
    "사용자 아이디"
    id: String!
    "사용자 비밀번호"
    pw: String!
    "사용자 이름"
    name: String!
    "사용자 등록 요청날짜 ex) 'yyyy/mm/dd'"
    date: String!
    "사용자 권한"
    auth: Auth!
  }

  "맛집 등록에 필요한 맛집 정보"
  input StoreInput {
    "맛집 주소"
    address: String!
    "맛집 이름"
    name: String!
    "맛집 등록 요청날짜 ex) 'yyyy/mm/dd'"
    date: String!
    "맛집 전화번호"
    phone_number: String!
    "맛집에 대한 설명"
    description: String!
    "맛집 사진정보 한장만 가능"
    img_url: String!
  }

  "공지사항 등록에 필요한 공지사항 정보"
  input NoticeInput {
    "공지 제목"
    title: String!
    "공지 본문"
    description: String!
    "공지 등록 요청날짜 ex) 'yyyy/mm/dd'"
    date: String!
  }

  "사용자 정보"
  type User {
    "사용자 아이디"
    id: String
    "사용자 비밀번호"
    pw: String
    "사용자 이름"
    name: String
    "사용자 등록 요청날짜 ex) 'yyyy/mm/dd'"
    date: String
    "사용자 권한"
    auth: Auth
  }

  "맛집 정보"
  type Store {
    "맛집 고유 id"
    store_id: ID
    "맛집 주소"
    address: String
    "맛집 이름"
    name: String
    "맛집 등록 요청날짜 ex) 'yyyy/mm/dd'"
    date: String
    "맛집 전화번호"
    phone_number: String
    "맛집에 대한 설명"
    description: String
    "맛집 사진정보 한장만 가능"
    img_url: String
  }

  "공지 정보"
  type Notice {
    "공지 고유 번호"
    notice_id: ID
    "공지 제목"
    title: String
    "공지 본문"
    description: String
    "공지 등록 요청날짜 ex) 'yyyy/mm/dd'"
    date: String
  }

  "수정(등록, 삭제) 요청 시 반환되는 객체"
  type Response {
    "수정 성공 여부"
    succeed: Boolean!
    "에러 발생시 에러 명칭"
    error: String
    "에러 발생시 에러 코드"
    code: Int
    "에러 메시지"
    message: String
  }

  type Query {
    """
    로그인 요청 API

    로그인시 사용자의 정보 반환

    로그인실패시 null값 반환
    """
    login(id: String!, pw: String!): User
    """
    맛집 정보 요청 API (ID값 필수)

    맛집 정보 반환

    id에 해당하는 맛집이 없는 경우 null값 반환
    """
    store(id: ID!): Store
    """
    맛집 전체 정보 요청 API
    """
    stores: [Store]
    """
    공지사항 정보 요청 API(ID값 필수)

    공지사항 정보 반환

    id에 해당하는 공지사항이 없는 경우 null값 반환
    """
    notice(id: ID!): Notice
    """
    공지사항 전체 정보 요청 API
    """
    notices: [Notice]
  }

  type Mutation {
    """
    회원가입 요청 API

    UserInput객체를 필수로 전달해야 합니다.

    회원가입 성공시 succeed: true값을 반환합니다.

    실패시 succeed: false와 error관련 정보를 반환합니다.
    """
    signUp(input: UserInput!): Response
    """
    맛집 등록 요청 API

    StoreInput객체를 필수로 전달해야 합니다.

    맛집 등록 성공시 succeed: true값을 반환합니다.

    실패시 succeed: false와 error관련 정보를 반환합니다.
    """
    registStore(input: StoreInput!): Response
    """
    맛집 삭제 요청 API

    맛집 id정보를 필수로 전달해야 합니다.

    맛집 삭제 성공시 succeed: true값을 반환합니다.

    실패시 succeed: false와 error관련 정보를 반환합니다.
    """
    deleteStore(id: String!): Response
    """
    공지사항 등록 요청 API

    NoticeInput객체를 필수로 전달해야 합니다.

    공지사항 등록 성공시 succeed: true값을 반환합니다.

    실패시 succeed: false와 error관련 정보를 반환합니다.
    """
    registNotice(input: NoticeInput!): Response
    """
    공지사항 삭제 요청 API

    공지사항 id정보를 필수로 전달해야 합니다.

    공지사항 삭제 성공시 succeed: true값을 반환합니다.

    실패시 succeed: false와 error관련 정보를 반환합니다.
    """
    deleteNotice(id: String!): Response
  }
`;

module.exports = typeDefs;
