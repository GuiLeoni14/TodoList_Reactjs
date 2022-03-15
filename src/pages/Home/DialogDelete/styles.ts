import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { style } from '@mui/system';
export const Container = styled(Dialog.Root)``;
export const Button = styled(Dialog.Trigger)`
    cursor: pointer;
`;
export const ButtonCancel = styled(Dialog.Close)`
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.primary};
`;
export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    z-index: 2022;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Content = styled(Dialog.Content)`
    width: 100%;
    max-width: 40rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme: { colors } }) => colors.second};
`;

export const Title = styled(Dialog.Title)`
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3.7rem;
    color: ${({ theme }) => theme.colors.gray};
    text-align: start;
`;
export const Description = styled(Dialog.Description)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray};
`;
export const Icon = styled.img`
    margin-top: 2rem;
`;

export const ButtonClose = styled(Dialog.Close)`
    cursor: pointer;
    margin-right: 1.4rem;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Buttons = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
