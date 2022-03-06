import styled from 'styled-components';
import { MainContainer } from '../../styles/container';
export const Container = styled.footer`
    background-color: ${({ theme }) => theme.colors.second};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled(MainContainer)``;
