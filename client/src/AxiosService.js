import Axios from "axios";

const AxiosService = Axios.create({
    baseURL : 'https://pineone-bob.herokuapp.com/' 
})

AxiosService.interceptors.request.use( 
    (config) => {
        return config;
    }
)


AxiosService.interceptors.response.use( 
    (config) => {
        return config;
    }
)
export default AxiosService;