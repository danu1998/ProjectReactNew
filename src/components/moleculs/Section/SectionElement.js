import styled from "styled-components"


export const MainSection = styled.div`
    background: ${({mainBg}) => (mainBg ? "#fff" : "#282828")};
    padding: 160px 0;
`

export const MainRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? "row-reverse" : "row")};
`

export const MainCol = styled.div`
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

export const MainWrapper = styled.div`
    max-width: 500px;
`

export const Heading = styled.h1`
    color: ${({headingColor}) => (headingColor ? "#aaaaaa" : "#8a8a8a")};
    font-size: 18px;
    font-weight: 600;
`

export const SubHeading = styled.h2`
    font-size: 48px;
    color: ${({subHeadColor}) => (subHeadColor ? "#fff" : "#282828")};
    font-weight: 600;
`

export const Description = styled.p`
    max-width: 400px;
    font-size: 18px;
    color: ${({descColor}) => (descColor ? "#aaaaaa" : "#8a8a8a")};
    margin: 40px 0;
`

export const ImgWrapper = styled.div`
    max-width: 550px;
    display: flex;
    justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
`

export const Img = styled.img`
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`