import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 58.3rem;
    background: #ffffff;
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
        margin-left: 1.6rem;
        color: #000;
        font-style: normal;
        font-weight: 600;
        font-size: 2rem;
    }
`;
