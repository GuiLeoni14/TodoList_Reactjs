import styled, { css } from 'styled-components';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export enum IconEnum {
    edit = 'edit',
    delete = 'delete',
}

type IconProps = {
    type: IconEnum;
};

export const Container = styled.div`
    width: 100%;
    max-width: 58.3rem;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 2.4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 1rem;
    & + div {
        margin-top: 2.1rem;
    }
`;

export const Left = styled.div`
    width: 100%;
    & > input {
        margin-top: 2.5rem;
    }
`;

export const Text = styled.div`
    width: 100%;
    margin-bottom: 2.6rem;
    h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.1rem;
    }
    p {
        margin-top: 0.4rem;
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.1rem;
    }
`;
export const Right = styled.div``;

export const Icon = styled.img``;
