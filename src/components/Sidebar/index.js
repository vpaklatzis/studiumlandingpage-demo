import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute, 
    SidebarRouteSignUp
} from './SidebarElements';

/* Sidebar Structure using React Styled Components */

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper >
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About us
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="subscriptions" onClick={toggle}>
                        Subscriptions
                    </SidebarLink>
                    <SidebarLink to="contactus" onClick={toggle}>
                        Contact us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    <SidebarRouteSignUp to="/signup">Sign Up</SidebarRouteSignUp>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
