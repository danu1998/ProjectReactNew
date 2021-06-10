import styled from "styled-components"
import {AiOutlineAntDesign, AiOutlineDesktop} from "react-icons/ai"
import {MdDeveloperBoard} from "react-icons/md"

export const ServiceSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 800px;
   margin-top: -60px;

   @media screen and (max-width: 768px){
        height: 1000px;
        margin-top: 120px;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 18px;
    color: #aaaaaa;
    font-weight: 600;
    text-align: center;
`

export const ServicesSubH1 = styled.h2`
    font-size: 48px;
    color: #282828;
    font-weight: 600;
    text-align: center;
    margin: 20px 0;
`

export const ServicesWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 50px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 30px 60px;
    }
`

export const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0 7px 20px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: 0.3s all ease-in-out ;

    &:hover{
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

    }
`

export const Icon1 = styled(AiOutlineAntDesign)`
    width: 50px;
    height: 50px;
    margin-top: 30px;
`

export const Icon2 = styled(AiOutlineDesktop)`
    width: 50px;
    height: 50px;
    margin-top: 30px;
`

export const Icon3 = styled(MdDeveloperBoard)`
    width: 50px;
    height: 50px;
    margin-top: 30px;
`

export const ServiceSubHeading = styled.h2`
    font-size: 24px;
    color: #282828;
    font-weight: 600;
    margin: 30px 0;
`

export const ServiceDesc = styled.p`
    font-size: 14px;
    color: #aaaaaa;
    text-align: center;
    margin-bottom: 30px;
`

