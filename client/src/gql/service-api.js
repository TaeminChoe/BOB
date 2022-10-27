import Apollo from "./provider-api";
import {
  LOGIN,
  SIGN_UP,
  STORE_GET,
  NOTICE_GET,
  NOTICE_CREATE,
  NOTICE_DELETE,
  STORE_DETAIL_GET,
  STORE_DELETE,
  STORE_CREATE,
} from "./queries";
/**
 * @description 화면단에서 사용할 API 목록입니다.
 * @author YangTaeWook
 */

/** 회원가입 요청 */
const createUser = (param) => {
  return Apollo.mutate({
    mutation: SIGN_UP,
    variables: {
      input: param,
    },
  });
};

/** 로그인 요청 */
const getAccountInfo = (param) => {
  return Apollo.query({
    query: LOGIN,
    variables: param,
  });
};

/** 업소 조회 요청 */
const getStore = () => {
  return Apollo.query({
    query: STORE_GET,
  });
};

/** 업소 상세조회 요청 */
const getStoreDetail = (param) => {
  return Apollo.query({
    query: STORE_DETAIL_GET,
    variables: param,
  });
};

/** 업소 생성 요청 */
const createStore = (param) => {
  console.log(param);
  return Apollo.mutate({
    mutation: STORE_CREATE,
    variables: param,
    // {
    //   input: {
    //     phone_number: "1",
    //     name: "name",
    //     img_url: "img",
    //     description: "descriptoin",
    //     date: "1",
    //     address: "address",
    //   },
    // },
  });
};

/** 업소 삭제 요청 */
const deleteStore = (param) => {
  return Apollo.mutate({
    mutation: STORE_DELETE,
    variables: param,
  });
};

/** 공지사항 조회 요청 */
const getNotice = () => {
  return Apollo.query({
    query: NOTICE_GET,
  });
};

/** 공지사항 생성 요청 */
const createNotice = (param) => {
  return Apollo.mutate({
    mutation: NOTICE_CREATE,
    variables: {
      input: param,
    },
  });
};

/** 공지사항 삭제 요청 */
const deleteNotice = (param) => {
  return Apollo.mutate({
    mutation: NOTICE_DELETE,
    variables: {
      deleteNoticeId: param,
    },
  });
};

export {
  getStore,
  getStoreDetail,
  createStore,
  deleteStore,
  getAccountInfo,
  createUser,
  getNotice,
  createNotice,
  deleteNotice,
};
