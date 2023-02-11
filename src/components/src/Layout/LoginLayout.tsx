import styled from "styled-components"

export const StyleLoginLayoutContainer = styled.div`
`

export const StyleLoginLayoutMain = styled.main`
`

const LoginLayout = (props: {
    children: React.ReactNode
}) => {
    return (
        <StyleLoginLayoutContainer>
            <StyleLoginLayoutMain>
            {props.children}
            </StyleLoginLayoutMain>
        </StyleLoginLayoutContainer>
    )
}

export default LoginLayout