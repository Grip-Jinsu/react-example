
import { ReactMemoEx } from '../../../../modules/view'
import { LoginInput } from "./Login.Input"
import { LoginButton } from "./Login.Button"
import { StyleLoginMainContainer, StyleLoginMainTitle, StyleLoginMainInputContainer } from "./style/Login.Main.style"
import { LoginRequest, LoginResponse } from '../../../../types/Login'
import { useState } from 'react'
import LoginService from '../../../../services/LoginService'
import StorageModule from '../../../../modules/storage/StorageModule'
import { useNavigate } from 'react-router'

export const LoginMain: React.FC = ReactMemoEx(() =>  {
    const navigate = useNavigate()

    const initLoginState = {
        email : "",
        password : ""
    }

    const [loginRequestState, setLoginRequest] = useState<LoginRequest>(initLoginState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginRequest({...loginRequestState, [name] : value}) 
    };

    const loginProc = () => {
        let data = {
            email : loginRequestState.email,
            password : loginRequestState.password
        }

        LoginService.login(data)
            .then((response: any) => {
                StorageModule.save("login", "Y")
                StorageModule.save("access_token", response.data.accessToken)
                StorageModule.save("refresh_token", response.data.refreshToken)
            })
            .catch((e: Error) => {
                console.log(e);
            });

        navigate("/", {replace: true})
    }

    return (
        <StyleLoginMainContainer>
            <StyleLoginMainTitle>GripONE</StyleLoginMainTitle>
            <StyleLoginMainInputContainer>
                <LoginInput description="이메일" 
                    placeholder="이메일 입력" 
                    type="text" name="email" value={loginRequestState.email || ''} onChange={onChangeHandler} />
                <LoginInput description="패스워드" 
                    placeholder="패스워드 입력" 
                    type="password" name="password" value={loginRequestState.password || ''} onChange={onChangeHandler}/>
                <LoginButton title="로그인" onClick={loginProc}  />
            </StyleLoginMainInputContainer>
        </StyleLoginMainContainer>
    )
})

