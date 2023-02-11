
import { ReactMemoEx } from '../../../modules/view'
import { StyleFooterContainer, StyleFooterDivContainer, StyleFooterTitle } from './style/Footer.style'

export const Footer: React.FC = ReactMemoEx(() =>  {

    return (
        <StyleFooterContainer>
            <StyleFooterDivContainer>
                <StyleFooterTitle>Do Footer</StyleFooterTitle>
            </StyleFooterDivContainer>
        </StyleFooterContainer>
    )
})
