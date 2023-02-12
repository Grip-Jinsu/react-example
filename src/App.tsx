import React from "react"
import { Helmet } from "react-helmet-async"
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { HomePage, LoginPage } from "./pages"
import LoginService from "./services/LoginService" 

const App: React.FC = () => {

    const loginCheck = LoginService.loginCheck()

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={loginCheck || loginCheck === 'Y' ? (
                    <>
                    <Helmet>
                    <title>메인 페이지</title>
                    </Helmet>
                    <HomePage />
                    </>
                    ) : (
                        <Navigate to="/login" />
                    )
                }
               />
                <Route path="/login" element={ !loginCheck ? (<>
                    <Helmet>
                    <title>로그인 페이지</title>
                    </Helmet>
                    <LoginPage />
                    </> ) : (
                        <Navigate to="/" />
                    )
                }
               />
            </Routes>
        </BrowserRouter>
    )
}

export default App