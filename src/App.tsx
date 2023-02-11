import React from "react"
import { Helmet } from "react-helmet-async"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { HomePage, LoginPage } from "./pages"

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ 
                    <>
                    <Helmet>
                    <title>메인 페이지</title>
                    </Helmet>
                    <HomePage />
                    </>
                }
               />
                <Route path="/login" element={ 
                    <>
                    <Helmet>
                    <title>로그인 페이지</title>
                    </Helmet>
                    <LoginPage />
                    </>
                }
               />

                <Route path="/dashboard" element={ 
                    <>
                    <Helmet>
                    <title>대쉬보드</title>
                    </Helmet>
                    <HomePage />
                    </>
                }
               />
            </Routes>
        </BrowserRouter>
    )
}

export default App