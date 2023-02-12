import testApi from "../config/TestApiConfig"
import { LoginRequest, LoginResponse } from "../types/Login"
import StorageModule from "../modules/storage/StorageModule"

const login = (data: LoginRequest)=>{
    return testApi.post<LoginResponse>("/login", data)
}

const loginCheck = ()=> {
    return StorageModule.get("login")
}

const LoginService = {
    login,
    loginCheck
}

export default LoginService