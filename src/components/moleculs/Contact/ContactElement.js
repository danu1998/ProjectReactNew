import styled from "styled-components"
import {BiCurrentLocation} from "react-icons/bi"
import {FaMobileAlt} from "react-icons/fa"
import {ImEnvelop} from "react-icons/im" 
import {FiSend} from "react-icons/fi"

export const SectionContact = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactH1 = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: #aaaaaa;
`

export const ContactSubHead = styled.h2`
margin-top: 20px;
    font-size: 32px;
    color: #282828;
`

export const ContactWrapper = styled.div`
    max-width: 100%;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
`

export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
`
export const CardInfo1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
`

export const CardInfo2 = styled.div`
    display: flex;
    align-items: center;
    margin: 25px 0;
`
export const TextInfo = styled.p`
    color: #282828;
    font-size: 14px;
    margin-left: 30px;
`

export const CardH2 = styled.h2`
    font-size: 18px;
    color: #282828;
`

export const Icon4 = styled(BiCurrentLocation)`
    width: 24px;
    height: 24px;
`

export const Icon5 = styled(FaMobileAlt)`
    width: 24px;
    height: 24px;
`

export const Icon6 = styled(ImEnvelop)`
    width: 24px;
    height: 24px;
`
export const BtnCircle = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #FF7272;
    cursor: pointer;
`

export const SendBtn = styled(FiSend)`
    width: 21px;
    height: 21px;
    margin-top: 15px;
    color: #fff;
`
