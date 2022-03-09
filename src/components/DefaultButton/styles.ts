import styled from 'styled-components';

export const Button = styled.input`
    padding: 0rem 3rem;
    line-height: 4rem;
    border-radius: 0.8rem;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.second};
`;
