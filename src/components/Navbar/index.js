import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Img } from "../../images/Studium.svg";
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
    NavBtnLinkSignUp
} from './NavbarElements';

/* Navbar Structure using React Styled Components */

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <Img 
                            height={150} 
                            width={200}
                            
                        />
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
                            <NavLinks to="contactus">Contact us</NavLinks>
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
