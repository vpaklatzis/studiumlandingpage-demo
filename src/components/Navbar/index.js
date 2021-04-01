import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    Img,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink,
    NavBtnLinkSignUp
} from './NavbarElements';

/* Navbar Structure using React Styled Components */

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <Img src="../../images/Studium.svg.default" alt="logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="billing">Billing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactus">Contact Us</NavLinks>
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
