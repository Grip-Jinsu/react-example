
import { ReactMemoEx } from '../../../../modules/view'
import { LoginInput } from "./Login.Input"
import { LoginButton } from "./Login.Button"
import { StyleLoginMainContainer, StyleLoginMainTitle, StyleLoginMainInputContainer } from "./style/Login.Main.style"
import { LoginRequest } from '../../../../types/Login'
import { useState } from 'react'
import LoginService from '../../../../services/LoginService'


export const LoginMain: React.FC = ReactMemoEx(() =>  {
    const initLoginState = {
        email : "",
        password : ""
    }

    const [loginState, setLogin] = useState<LoginRequest>(initLoginState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin({...loginState, [name] : value}) 
        console.log(loginState)
    };

    const loginProc = () => {
        let data = {
            email : loginState.email,
            password : loginState.password
        }

        LoginService.login(data)
            .then((response: any) => {
                setLogin({
                    email : response.data.email,
                    password : response.data.password
                });
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    return (
        <StyleLoginMainContainer>
            <StyleLoginMainTitle>GripONE</StyleLoginMainTitle>
            <StyleLoginMainInputContainer>
                <LoginInput description="이메일" 
                    placeholder="이메일 입력" 
                    type="text" name="email" value={loginState.email || ''} onChange={onChangeHandler} />
                <LoginInput description="패스워드" 
                    placeholder="패스워드 입력" 
                    type="password" name="password" value={loginState.password || ''} onChange={onChangeHandler}/>
                <LoginButton title="로그인" onClick={loginProc}  />
            </StyleLoginMainInputContainer>
        </StyleLoginMainContainer>
    )
})

