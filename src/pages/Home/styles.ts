import styled from 'styled-components';
export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MainHome = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const LeftContent = styled.div`
    min-height: inherit;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const RightContent = styled.div`
    padding-top: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentRight = styled.div`
    width: 100%;
    height: calc(100% - 20rem);
    position: relative;
    max-width: 58.3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    overflow: auto;
`;

export const Text = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h1 {
        width: 100%;
        margin: 3.5rem 0rem;
        font-style: normal;
        font-weight: 600;
        font-size: 3rem;
        line-height: 3.7rem;
        color: ${({ theme }) => theme.colors.gray};
        text-align: start;
    }
`;
