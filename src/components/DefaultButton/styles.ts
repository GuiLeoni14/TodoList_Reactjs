import styled, { css } from 'styled-components';
import { ETypeButton } from '.';
export const Button = styled.button`
    padding: 0rem 0.4rem;
    line-height: 3.2rem;
    border-radius: 0.8rem;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.second};
    cursor: pointer;
    transition: all 0.3s;
    color: #000;
    ${({ className }) =>
        className?.includes(ETypeButton.completed) &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
                margin-right: 1.1rem;
            }
        `}
`;
