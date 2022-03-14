import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
export const Container = styled(Dialog.Root)``;
export const Button = styled(Dialog.Trigger)``;
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
    background-color: $green-600;
    width: 100%;
    max-width: 46rem;
    border-radius: 1rem;
`;
