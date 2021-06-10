import React from 'react'
import {Container, Button} from "../../../components"
import {Link} from "react-router-dom"
import {MainSection,
        MainRow,
        MainCol,
        MainWrapper,
        Heading,
        SubHeading,
        Description,
        ImgWrapper,
        Img} from "./SectionElement"

const Hero = ({id,
            mainBg,
            imgStart,
            headingColor,
            subHeadColor,
            descColor,
            headingText,
            subHeadText,
            descText,
            start,
            img,
            alt}) => {
    return (
        <div>
            <MainSection mainBg={mainBg} id={id}>
                <Container>
                    <MainRow imgStart={imgStart}>

                        <MainCol>
                            <MainWrapper>
                                <Heading headingColor={headingColor}>{headingText}</Heading>
                                <SubHeading subHeadColor={subHeadColor}>{subHeadText}</SubHeading>
                                <Description descColor={descColor}>{descText}</Description>

                                <Link to="/">
                                    <Button labelBtn="View More" />
                                </Link>
                            </MainWrapper>
                        </MainCol>

                        <MainCol>
                            <ImgWrapper start="true">
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </MainCol>

                    </MainRow>
                </Container>
            </MainSection>
        </div>
    )
}

export default Hero
