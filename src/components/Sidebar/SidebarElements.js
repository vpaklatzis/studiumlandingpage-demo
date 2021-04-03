import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

/* SideSbar Styled Elements */

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #000;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columms: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding-left: 0px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #FA696D;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 16px 64px;
    color: #FA696D;
    font-size: 16px;
    outline: none;
    border: 2px solid #FA696D;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 4px 0px;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        color: #ff7a7e;
    }
`;

export const SidebarRouteSignUp = styled(LinkRouter)`
    border-radius: 50px;
    background: #FA696D;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        background: #ff7a7e;
    }
`;