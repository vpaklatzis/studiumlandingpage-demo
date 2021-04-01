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
    background: ${({primary}) => (primary ? '#5390d9' : '#010606')};
    padding: 1rem 3rem;
    font-size: 1rem;
    font-weight: bold;
    
    &:hover {
        transition: all 0.2s ease-in-out;
    }
`;

