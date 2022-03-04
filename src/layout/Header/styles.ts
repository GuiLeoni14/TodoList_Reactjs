import styled from 'styled-components';
import { Container } from '../../styles/container';
export const MainHeader = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.second};
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerHeader = styled(Container)`
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
