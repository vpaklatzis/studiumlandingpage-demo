import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #f9f9f9;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const SignUpLogo = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    justify-self: flex-start;
    cursor: pointer;
    diplay: flex;
    align-items: center;
`;

export const Img = styled.img`
    width: 150px;
    height: 30px;
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 88px 32px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(154,160,185,.4), 0 15px 40px rgba(166,173,201,.4);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #FA696D;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 16px;
    color: #FA696D;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 1px solid #FA696D;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #FA696D;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #f9f9f9;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff7a7e;
    }
`;