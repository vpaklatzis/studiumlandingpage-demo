import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem calc((100vw - 1400px) / 2);
    height: 100%;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const HeroSection = styled.section`
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`;

export const HeroColumnLeft = styled.div`
    display: flex;
    color: black;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 3rem;
`;

export const HeroImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 750px;
    max-height: 420px;
`;

export const HeroColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;


`;

export const HeroLogo = styled.h1`
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-size: 32px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const HeroPara = styled.p`
    margin: 2rem 0;
    font-size: 38px;
    line-height: 1;
    font-weight: bold;
    max-width: 800px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`;

export const HeroBtn = styled.div`
    padding: 1rem 3rem;
    font-size: 1rem;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    background: #01bf71;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;