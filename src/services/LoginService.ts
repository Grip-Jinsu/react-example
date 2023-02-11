import testApi from "../config/TestApiConfig"
import { LoginRequest, LoginResponse } from "../types/Login"

const login = (data: LoginRequest)=>{
    return testApi.post<LoginResponse>("/login", data)
}

const LoginService = {
    login
}

export default LoginService