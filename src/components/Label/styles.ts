import styled from 'styled-components';
import * as LabelRoot from '@radix-ui/react-label';

export const Container = styled.div`
    position: relative;
    background-color: transparent;
    padding-top: 1.8rem;
    &:not(:first-child) {
        margin-top: 2rem;
    }
`;

export const Label = styled(LabelRoot.Root)`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 1.8rem;
    font-size: 1.3rem;
    transition: all 0.2s ease-out;
`;

export const Input = styled.input`
    border: 0;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};
    outline: none;
    min-width: 28rem;
    font-size: 1.6rem;
    transition: all 0.3s ease-out;
    border-radius: 0;
    &::placeholder {
        color: transparent;
    }
    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.second};
    }
    &:focus + span,
    &:not(:placeholder-shown) + span {
        font-size: 1rem;
        margin-top: 0;
        color: ${({ theme }) => theme.colors.second};
    }
`;
export const TextArea = styled.textarea`
    border: 0;
    resize: none;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};
    outline: none;
    min-width: 28rem;
    font-size: 1.6rem;
    transition: all 0.3s ease-out;
    border-radius: 0;
    &::placeholder {
        color: transparent;
    }
    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.second};
    }
    &:focus + span,
    &:not(:placeholder-shown) + span {
        font-size: 1rem;
        margin-top: 0;
        color: ${({ theme }) => theme.colors.second};
    }
`;
