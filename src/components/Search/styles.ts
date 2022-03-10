import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 58.3rem;
    background: rgba(0, 0, 0, 0.1);
    padding: 1.5rem 1.8rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & > input {
        width: 100%;
        border: none;
        outline: none;
        background: none;
        margin-left: 1.2rem;
        color: ${({ theme }) => theme.colors.gray};
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
    }
`;
