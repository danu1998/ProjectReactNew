import styled from "styled-components"


export const HeroSection = styled.div`
    background: #282828;
    padding: 180px 0;
`

export const HeroRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
`

export const HeroCol = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        padding: 40px 0;
    }
`

export const HeroWrapper = styled.div`
    max-width: 500px;
`

export const Heading = styled.h1`

`

export const SubHeading = styled.h2`
    font-size: 56px;
    color: #fff;
    font-weight: 600;
`

export const Description = styled.p`
    max-width: 400px;
    font-size: 18px;
    color: #8a8a8a;
    margin: 40px 0;
`

export const ImgWrapper = styled.div`
    max-width: 550px;
    display: flex;
    justify-content: flex-end;
`

export const Img = styled.img`
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`