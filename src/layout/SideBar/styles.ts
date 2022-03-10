import styled from 'styled-components';
import { MainContainer } from '../../styles/container';
export const Container = styled.header`
    min-height: 100vh;
    width: 100%;
    max-width: 15%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;
