import styled, { css } from 'styled-components';
export const Container = styled.div`
    width: 100%;
    padding: 3rem 2.4rem;
    height: 100%;
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding-bottom: 2.2rem;
    &::before {
        content: '';
        z-index: 10;
        position: absolute;
        bottom: 0rem;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 14.3rem;
        height: 0.1rem;
    }
`;
export const ImageUser = styled.div`
    width: 4.1rem;
    height: 4.1rem;
    overflow: hidden;
`;
export const DescriptionUser = styled.div`
    margin-left: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h4 {
        margin-bottom: 0.3rem;
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
    }
    span {
        font-style: normal;
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.6rem;
        filter: brightness(80%);
    }
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const About = styled.div`
    padding: 0.8rem 1.8rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: space-between;
    border-radius: 1rem;
    margin-top: 1.4rem;
    ${({ className }) =>
        className?.includes('checked') &&
        css`
            filter: brightness(80%);
        `}
    span {
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        margin-left: 2.4rem;
    }
`;
export const Task = styled(About)`
    ${({ className }) =>
        className?.includes('checked') &&
        css`
            filter: brightness(80%);
        `}
`;
