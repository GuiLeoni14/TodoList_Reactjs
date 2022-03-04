import styled from 'styled-components';
import { MainContainer } from '../../styles/container';
export const Container = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.second};
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled(MainContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListIcons = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 5rem;
        height: 5rem;
    }
`;
