import React from 'react'
import {Container} from "../../../components"
import {SectionFooter,
        FooterWrapper,
        FooterLinkContainer,
        FooterLinkWrapper,
        FooterLinkItem,
        FooterLinkTitle,
        FooterLink} from "./FooterElement"

const Footer = () => {
    return (
        <div>
            <SectionFooter>
                <Container>
                    <FooterWrapper>
                        <FooterLinkContainer>
                            <FooterLinkWrapper>

                                <FooterLinkItem>
                                    <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/">How it works</FooterLink>
                                    <FooterLink to="/">Testimonials</FooterLink>
                                    <FooterLink to="/">Careers</FooterLink>
                                    <FooterLink to="/">Term of services</FooterLink>    
                                </FooterLinkItem>

                                <FooterLinkItem>
                                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to="/">Contact</FooterLink>
                                    <FooterLink to="/">Support</FooterLink>
                                    <FooterLink to="/">Location</FooterLink>
                                    <FooterLink to="/">Sponsorship</FooterLink>    
                                </FooterLinkItem>

                                <FooterLinkItem>
                                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to="/">Linked</FooterLink>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Instagram</FooterLink>
                                    <FooterLink to="/">Twitter</FooterLink>    
                                </FooterLinkItem>
                            
                            </FooterLinkWrapper>
                        </FooterLinkContainer>
                    </FooterWrapper>
                </Container>
            </SectionFooter>
        </div>
    )
}

export default Footer
