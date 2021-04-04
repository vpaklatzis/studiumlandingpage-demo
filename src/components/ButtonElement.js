import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 50px;
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#FA696D' : '#010606')};
    padding: 1rem 3rem;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 5px 10px rgba(154,160,185,.6), 0 15px 40px rgba(166,173,201,.6);
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        background: #ff7a7e;
    }
`;

