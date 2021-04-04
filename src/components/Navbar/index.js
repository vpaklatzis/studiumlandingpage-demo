import React from 'react';
import { FaBars } from 'react-icons/fa';
import Studium from "../../images/Studium.png";
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink,
    NavBtnLinkSignUp,
    Img
} from './NavbarElements';

/* Navbar Structure using React Styled Components */

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Img src={Studium} alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} spy={true} duration={500} exact='true'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} spy={true} duration={500} exact='true'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="pricing" smooth={true} spy={true} duration={500} exact='true'>Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactus" smooth={true} spy={true} duration={500} exact='true'>Contact us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        <NavBtnLinkSignUp to="/signup">Sign Up</NavBtnLinkSignUp>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
