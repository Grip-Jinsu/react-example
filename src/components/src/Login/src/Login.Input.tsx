import React, { InputHTMLAttributes } from 'react'
import { ReactMemoEx } from "../../../../modules/view"
import { StyleLoginContainer, StyleLoginInput, StyleLoginLabel } from "./style/Login.Input.style"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  description?: string
  type: string
  placeholder: string
}

type MyRef =
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

export const LoginInput: React.FC<InputProps> = ReactMemoEx(React.forwardRef((props: InputProps) => {
  return (
    <StyleLoginContainer >
        <StyleLoginLabel>{props.description}</StyleLoginLabel>
        <StyleLoginInput {...props} />
    </StyleLoginContainer>
  )
})
)