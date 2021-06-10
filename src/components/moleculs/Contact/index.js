import React from 'react'
import {Container, Label} from "../../../components"
import {SectionContact,
        ContactH1,
        ContactSubHead,
        ContactWrapper,
        ContactCard,
        CardH2,
        CardInfo1,
        CardInfo2,
        Icon4,
        Icon5,
        Icon6,
        TextInfo,
        BtnCircle,
        SendBtn
        } from "./ContactElement"

const Contact = () => {
    return (
        <div>
            <SectionContact id="contact">
                <Container>
                
                    <ContactH1>03 - Our Contact</ContactH1>
                    <ContactSubHead>Get In Touch</ContactSubHead>

                    <ContactWrapper>

                        <ContactCard>
                        <CardH2>Send Us a Message</CardH2>
                            
                        <CardInfo1>

                            <Label textLabel="Email" placeholder="Input Your Email" />
                            <Label textLabel="Full Name" placeholder="Input Your Name" />
                            <Label textLabel="Phone" placeholder="Input Your Number" />
                            <Label textLabel="Message" placeholder="Input Your Message" />
                            <BtnCircle to="/">
                                <SendBtn />
                            </BtnCircle>
                        </CardInfo1>
                        </ContactCard>

                        <ContactCard>
                            <CardH2>Contact Information</CardH2>

                            <CardInfo2>
                                <Icon4 />
                                <TextInfo>
                                    JL.Jendral Sudirman No.10 Jakarta
                                </TextInfo>
                            </CardInfo2>

                            <CardInfo2>
                            <Icon5 />
                            <TextInfo>
                                    (+62)895414735627
                            </TextInfo>
                            </CardInfo2>

                            <CardInfo2>
                            <Icon6 />
                            <TextInfo>
                                    www.RoyalDesignAgency.com
                            </TextInfo>
                            </CardInfo2>

                        </ContactCard>

                    </ContactWrapper>
                
                </Container>
            </SectionContact>
        </div>
    )
}

export default Contact
