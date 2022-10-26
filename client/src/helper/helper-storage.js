/** Browser Storage 관련 모듈 */
const ACCESS_TOKEN = "__1__";
// const REFRESH_TOKEN = "__2__";

/** Local Storage에 Token 저장 */
function setLoginLocalToken(token) {
  setLocalToken(ACCESS_TOKEN, token);
}

/** Local Storage 로그인 Token 조회 */
function getLoginLocalToken() {
  return JSON.parse(getLocalToken(ACCESS_TOKEN));
}

/** Local Storage 로그인 Token 제거 */
function removeLoginLocalToken() {
  removeLocalToken(ACCESS_TOKEN);
}

/** Local Storage Token 조회 */
function getLocalToken(key) {
  console.log("key : ", key);
  return window.localStorage.getItem(key);
}

/** Local Storage Token 설정 */
function setLocalToken(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

/** Local Storage Token 제거 */
function removeLocalToken(key) {
  window.localStorage.removeItem(key);
}

export { getLoginLocalToken, setLoginLocalToken, removeLoginLocalToken };
