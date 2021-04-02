import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

/* Navbar Styled Elements */

export const Nav = styled.nav`
    background #f9f9f9;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top 0;
    z-index: 10;
    box-shadow: 0 1px 6px 0 rgba(50,40,20,0.3);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
    }
`;

export const NavLogo = styled(LinkRouter)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.75rem;
    diplay: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 906px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 906px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 50px;
    font-size: 1.15rem;
    align-items: center;
`;

export const NavLinks = styled(LinkScroll)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;

    &.active {
        border-bottom: 3px solid #FA696D;
    }

    &:hover {
        border-bottom: 3px solid #FA696D;
        transition: 0.05s ease-in-out;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 906px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FA696D;
    font-size: 16px;
    outline: none;
    border: 2px solid #FA696D;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
    margin: 0px 4px;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        color: #ff7a7e;
    }
`;

export const NavBtnLinkSignUp = styled(LinkRouter)`
    border-radius: 50px;
    background: #FA696D;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        background: #ff7a7e;
    }
`;

export const Img = styled.img`
    width: 150px;
    height: 30px;
`;