import React from 'react'
import {Container} from "../../../components"
import {ServiceSection,
        ServicesH1,
        ServicesSubH1,
        ServicesWrapper,
        ServiceCard,
        Icon1,
        Icon2,
        Icon3,
        ServiceSubHeading,
        ServiceDesc
        } from "./ServicesElement"

const Services = () => {
    return (
        <div>
            <ServiceSection id="services">
                <Container>
                    <ServicesH1>02 - Our Services</ServicesH1>
                    <ServicesSubH1>The Services We Provide</ServicesSubH1>
                    <ServicesWrapper>
                    
                        <ServiceCard>
                            <Icon1 />  
                            <ServiceSubHeading>UI & UX DESIGN</ServiceSubHeading>
                            <ServiceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServiceDesc>
                        </ServiceCard>

                        
                        <ServiceCard>
                            <Icon2 />
                            <ServiceSubHeading>WEB & MOBILE DESIGN</ServiceSubHeading>
                            <ServiceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServiceDesc>
                        </ServiceCard>

                        
                        <ServiceCard>
                            <Icon3 />
                            <ServiceSubHeading>WEB & MOBILE DEVELOPER</ServiceSubHeading>
                            <ServiceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServiceDesc>
                        </ServiceCard>
                
                    
                    </ServicesWrapper>
                </Container>
            </ServiceSection>
        </div>
    )
}

export default Services
