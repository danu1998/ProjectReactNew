import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import {Button} from "../.."
import {HeadLogo} from "../../../assets"
import {animateScroll as scroll} from "react-scroll"
import {FaTimes, FaBars} from "react-icons/fa"
import {Nav,
        NavLogo,
        HeaderLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLink,
        NavbarContainer} from "./NavbarElement"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >=80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    },
        [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div>
            <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <HeaderLogo src={HeadLogo} alt="Header Nav"/> Royal Design Agency
                </NavLogo>
                
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />} 
                </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLink to="hero"
                    smooth={true}
                    exact="true"
                    offset={-70}
                    spy={true}
                    duration={500} 
                    
                    >
                        Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="about" 
                    smooth={true}
                    exact="true"
                    offset={-70}
                    spy={true}
                    duration={500} 
                    >
                        About Us
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="services"
                    smooth={true}
                    exact="true"
                    offset={-70}
                    spy={true}
                    duration={500}
                    
                    >
                        Services
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="contact"
                    smooth={true}
                    exact="true"
                    offset={-70}
                    spy={true}
                    duration={500}
                    >
                        Contact
                    </NavLink>
                </NavItem>


                <Link to="/sign-up">
                    <Button labelBtn="Get Started" />
                </Link>
            </NavMenu>
            </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
