import Axios from "axios";

let store = null;

const providerLoading = (_store) => {
  store = _store;
};
export { providerLoading };

const AxiosService = Axios.create({
  // baseURL: "https://pineone-bob.herokuapp.com/",
  baseURL: "http://localhost:9500/",
});

AxiosService.interceptors.request.use((config) => {
  store.commit("setLoadingOpen", true);
  return config;
});

AxiosService.interceptors.response.use(
  (response) => {
    store.commit("setLoadingOpen", false);
    return response;
  },
  // 서버에서 에러를 반환했을 경우에도 Loading close 추가
  (error) => {
    store.commit("setLoadingOpen", false);
    return error;
  }
);

export default AxiosService;
