import styled from 'styled-components';
import { Link } from 'react-scroll';

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
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(255, 255, 255, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.15);
    
    &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
        background: #ff7a7e;
    }
`;

