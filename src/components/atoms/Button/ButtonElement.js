import styled from "styled-components"

export const Btn = styled.button`
    background-color: #FF7272;
    padding: 15px 30px;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        border: 2px solid #FF7272;
        background: transparent;
        color: #aaaaaa;
        transition: 0.3s all ease;
    }
`