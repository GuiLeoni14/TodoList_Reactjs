import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.second};
    box-shadow: 0 0.8rem 3.2rem 0 rgba(31, 38, 135, 0.37);
    border-radius: 1rem;
    & > input {
        margin-top: 2rem;
    }
`;
export const Title = styled.h3`
    font-size: 3rem;
    width: 100%;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: start;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.gray};
`;

export const Input = styled(TextField)`
    width: 100%;
    & + div {
        margin-top: 3.4rem;
    }
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & button + button {
        margin-left: 1.4rem;
    }
`;
