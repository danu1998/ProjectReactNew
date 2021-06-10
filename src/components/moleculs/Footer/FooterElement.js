import styled from "styled-components"
import {Link} from "react-router-dom"

export const SectionFooter = styled.div`
    margin-top: 160px;
    background-color: #282828;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 0;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const FooterLinkWrapper = styled.div`
    display: flex;
`

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    text-align: left;
    width: 300px;
    box-sizing: border-box;
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 20px;
    color: #FF7272;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 14px;
    color: #aaaaaa;
`