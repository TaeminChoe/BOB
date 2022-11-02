import AxiosService from "./AxiosService";

/**
 * @file 서버 연동을 위한 API 호출 모듈입니다.
 */

/**
 *
 * @param {Object} params
 * @param {String} params.id
 * @returns {Promise}
 * @desc 회원 정보 상세 조회(아이디 중복 확인)
 * GET - {{API_SERVER}}/user/detail
 */
function getUserDetail(params) {
  console.log("호출?");
  AxiosService.get("/user/detail", { params });
}

/**
 * @param {Object} params
 * @param {String} params.id
 * @param {String} params.pw
 * @returns {Promise}
 * @desc 토큰 요청 함수입니다.(로그인)
 * POST - {{API_SERVER}}/user
 */
function getAccountInfo(params) {
  return AxiosService.post("/token", params);
}

/**
 * @param {Object} params
 * @param {String} params.id
 * @param {String} params.pw
 * @param {String} params.name
 * @param {String} params.auth
 * @returns {Promise}
 * @desc 회원가입 요청 함수입니다.
 * POST - {{API_SERVER}}/user
 */
function createAccountInfo(params) {
  return AxiosService.post("/user", params);
}

/**
 * @param {Object} params
 * @param {String} params.id
 * @returns {Promise}
 * @desc 회원 삭제 요청 함수입니다.
 * DELETE - {{API_SERVER}}/user
 */
function deleteAccountInfo(params) {
  console.log(params);
  return AxiosService.delete("/user", { data: { ...params } });
}

export { getUserDetail, getAccountInfo, createAccountInfo, deleteAccountInfo };
