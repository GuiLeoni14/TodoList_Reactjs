import styled from 'styled-components';
export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MainHome = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const LeftContent = styled.div`
    min-height: inherit;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const RightContent = styled.div`
    width: 100%;
    padding: 2rem;
    max-width: 80%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 2rem;
    overflow: hidden;
    overflow-y: scroll;
`;
