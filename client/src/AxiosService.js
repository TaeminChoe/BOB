import Axios from "axios";

let store = null;

const providerLoading = (_store) => {
    store = _store;
  };
export { providerLoading };

const AxiosService = Axios.create({
    baseURL : 'https://pineone-bob.herokuapp.com/' 
})

AxiosService.interceptors.request.use( 
    (config) => {
        store.commit("setLoadingOpen", true);
        return config;
    }
)


AxiosService.interceptors.response.use( 
    (config) => {
        store.commit("setLoadingOpen", false);
        return config;
    }
)
export default AxiosService;