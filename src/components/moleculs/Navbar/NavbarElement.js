import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import {Container} from "../../../components"

export const Nav = styled.div`
    background: #282828;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 90px;

`

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-self: flex-start;
    align-items: center;
    color: #fff;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;

    @media screen and (max-width: 768px){
        margin: 0 30px;
    }

`

export const HeaderLogo = styled.img`
    margin-right: 10px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        font-size: 14px;
        /* position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%); */
        margin: 40px;
        text-align: center;
        justify-content: center;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background: #282828;
        left: ${({click}) => (click ? 0: "-100%")}
    }
`

export const NavItem = styled.li`
    padding: 0 30px;
    margin-right: 10px;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const NavLink = styled(LinkS)`
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        color: #FF7272;
    }

    &.active{
        color: #ff7272;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
        padding: 30px;
        display: table;
    }
`

