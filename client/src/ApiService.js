import AxiosService from "./AxiosService"

function getUser(params){
    AxiosService.get("/user/detail",{params:{params}})
}

export {getUser}


function getAccountInfo(params){
    const {id, pw} = params
    return AxiosService.post("/token",{id:id,pw:pw})
}

export {getAccountInfo}