import React from 'react'
import {Container, Button} from "../../../components"
import {Link} from "react-router-dom"
import {HeroSection,
        HeroRow,
        HeroCol,
        HeroWrapper,
        Heading,
        SubHeading,
        Description,
        ImgWrapper,
        Img} from "./HeroElement"
import {HeroBg} from "../../../assets"

const Hero = () => {
    return (
        <div>
            <HeroSection id="hero">
                <Container>
                    <HeroRow>

                        <HeroCol>
                            <HeroWrapper>
                                <Heading></Heading>
                                <SubHeading>Beautifull Web & Mobile App Design</SubHeading>
                                <Description>plan your wants and analyze every 
                                need you want to make to develop each of 
                                your products.</Description>

                                <Link to="/">
                                    <Button labelBtn="View More" />
                                </Link>
                            </HeroWrapper>
                        </HeroCol>

                        <HeroCol>
                            <ImgWrapper>
                                <Img src={HeroBg} alt="Hero-image"/>
                            </ImgWrapper>
                        </HeroCol>

                    </HeroRow>
                </Container>
            </HeroSection>
        </div>
    )
}

export default Hero
