import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FA696D;

    @media screen and (max-width: 1000px) {
        height: 850px;
    }

    @media screen and (max-width: 768px) {
        height: 1150px;
        margin-top: 250px;
    }

    @media screen and (max-width: 480px) {
        height: 1240px;
        margin-top: 220px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        max-width: 90%;
    }
`;

export const ServicesCard = styled.div`
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 40px;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(255, 255, 255, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
    trasition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1400px) {
        padding: 30px;
    }
`;

export const ServicesIcon = styled.img`
    height: 180px;
    width: 180px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 3rem;
    color: #f9f9f9;
    margin-bottom: 80px;

    @media screen and (max-width: 1000px) {
        color: #f9f9f9;
        font-size: 2.5rem;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;