import styled from "styled-components";

export const StyleLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    max-width: 100%;

    input {
        width: 80%;
        box-sizing: border-box;
          border: none;
        font-size: 1.3rem;
        padding-left: 1.5rem;
        padding-bottom: 1rem;
        box-shadow: inset 0px -3px 0px 0px rgba(187,187,187,0.2);
        transition: box-shadow 0.2s ease-in;
    }

    input:focus{
        box-shadow: inset 0px -3px 0px 0px rgba(34,193,195,0.7);
        outline: none;
    }

    input::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.25s ease-out;
    }

    input:hover::-webkit-input-placeholder,
    input:focus::-webkit-input-placeholder{
        opacity: 0;
    }

    label{
        align-self: start;
        padding-left: 4.5rem;
        padding-bottom: 0.5rem;
        color: rgba(187,187,187,0.9);
    }
`

export const StyleLoginLabel = styled.label.attrs({
})``

export const StyleLoginInput = styled.input.attrs({

})``