
import { ReactMemoEx } from "../../../modules/view"
import { StyleHeaderContainer, StyleHeaderDivContainer,
        StyleHeaderLogoConatiner, StyleHeaderNavContainer, 
        StyleHeaderUlContainer, StyleHeaderLiItem
} from "./style/Header.style"

export const Header: React.FC = ReactMemoEx(() =>  {

    return (
        <StyleHeaderContainer>
            <StyleHeaderDivContainer>
                <StyleHeaderLogoConatiner>
                    로고 자리
                </StyleHeaderLogoConatiner>

                <StyleHeaderNavContainer>
                    <StyleHeaderUlContainer>
                        <StyleHeaderLiItem>메뉴 1</StyleHeaderLiItem>
                        <StyleHeaderLiItem>메뉴 1</StyleHeaderLiItem>
                    </StyleHeaderUlContainer>

                </StyleHeaderNavContainer>
            </StyleHeaderDivContainer>
        </StyleHeaderContainer>
    )

})