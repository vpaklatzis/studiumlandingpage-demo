import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #FA696D;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 180px;
    box-sizing: border-box;
    color: #f9f9f9;

    @media screen and (max-width: 591px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #f9f9f9;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;

    &:hover {
        transform: scale(1.02);
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #f9f9f9;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display; flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #f9f9f9;
    font-size: 24px;
`;    

export const WebsiteRights = styled.small`
    color: #f9f9f9;
    margin-bottom: 16px;
`;