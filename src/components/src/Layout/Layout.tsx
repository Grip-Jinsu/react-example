import styled from "styled-components"
import { Footer } from "../Footer"
import { Header } from "../Header"

export const StyleLayoutContainer = styled.div`
    padding-top: 80px;
`

export const StyleLayoutMain = styled.main`
    min-height: calc(100vh - 180px);
`

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <StyleLayoutContainer>
            <Header/>
            <StyleLayoutMain>
            {props.children}
            </StyleLayoutMain>
            <Footer/>
        </StyleLayoutContainer>
    )
}

export default Layout