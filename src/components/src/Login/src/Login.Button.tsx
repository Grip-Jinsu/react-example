import styles from "../../scss/LoginButton.module.scss"
import React, { InputHTMLAttributes } from 'react'
import { ReactMemoEx } from "../../../../modules/view"
import { StyleLoginButtonContainer, StyleLoginButton } from "./style/Login.Button.style"


type ButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  title?: string
}

export const LoginButton: React.FC<ButtonProps> = ReactMemoEx(React.forwardRef((props: ButtonProps) => {
  return (
    <StyleLoginButtonContainer id="button" onClick={props.onClick}>
        <StyleLoginButton>{props.title}</StyleLoginButton>
    </StyleLoginButtonContainer>

    // <div id="button" className={styles.row} >
    //     <button className={styles.button}>{props.title}</button>
    // </div>
  )
})
)