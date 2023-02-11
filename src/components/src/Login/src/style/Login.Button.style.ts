import styled from "styled-components";

export const StyleLoginButtonContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    max-width: 100%;

    button {
        border-radius: 25px;
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        background: rgb(2, 18, 63);
        background: linear-gradient(90deg, rgba(2, 18, 63) 0%,     rgb(165, 163, 158) 100%);
        border: 0px;
        cursor: pointer;
        transition: opacity 0.25s ease-out;
    }

    button:hover{
        opacity: 0.8;
    }
`

export const StyleLoginButton = styled.button`
    padding-bottom: 0.2rem;
`