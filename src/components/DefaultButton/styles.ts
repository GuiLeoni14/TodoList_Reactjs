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
    white-space: nowrap;
    ${({ className }) => {
        if (className?.includes(ETypeButton.completed)) {
            return css`
                display: flex;
                align-items: center;
                justify-content: center;
                & > img {
                    margin-right: 1.1rem;
                }
            `;
        }
        if (className?.includes(ETypeButton.created)) {
            return css`
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 5.4rem;
                padding: 0rem 1.5rem;
                font-size: 1.8rem;
                color: ${({ theme }) => theme.colors.second};
                background-color: ${({ theme }) => theme.colors.primary};
                & > img {
                    margin-right: 0.8rem;
                }
            `;
        }
        if (className?.includes(ETypeButton.save) || className?.includes(ETypeButton.delete)) {
            return css`
                font-style: normal;
                font-weight: 600;
                font-size: 1.4rem;
                text-transform: uppercase;
                line-height: 1.7rem;
                color: ${({ theme }) => theme.colors.primary};
            `;
        }
    }}
`;
