import LoginLayout from "../../components/src/Layout/LoginLayout"
import { LoginContainer } from "../../containers"
import { ReactMemoEx } from "../../modules/view"

export const LoginPage: React.FC = ReactMemoEx(() =>  {
    return (
        <LoginLayout >
            <LoginContainer />
        </LoginLayout>
    )
})