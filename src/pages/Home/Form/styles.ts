import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    padding: 2rem;
    max-width: 45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0.8rem 3.2rem 0 rgba(31, 38, 135, 0.37);
    & > input {
        margin-top: 2rem;
    }
`;
export const Title = styled.h3`
    font-size: 3rem;
`;
