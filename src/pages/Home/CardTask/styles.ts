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
`;

export const Left = styled.div`
    & > input {
        margin-top: 2.5rem;
    }
`;

export const Text = styled.div`
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

export const ScrollArea = styled(ScrollAreaPrimitive.Root)`
    width: 100%;
    height: 7rem;
    overflow: hidden;
    padding-right: 1rem;
`;

export const ScrollBar = styled(ScrollAreaPrimitive.Scrollbar)`
    display: flex;
    user-select: none;
    touch-action: none;
    padding: 0.2rem;
    background-color: #fff;
    transition: background 160ms ease-out;
    &:hover {
        background: #ccc;
    }
    &[data-orientation='vertical'] {
        width: 1rem;
    }
    &[data-orientation='horizontal'] {
        flex-direction: column;
        height: 1rem;
        width: 100%;
    }
`;

export const ScrollView = styled(ScrollAreaPrimitive.Viewport)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const ScrollThumb = styled(ScrollAreaPrimitive.Thumb)`
    flex: 1;
    background: #fff;
    border-radius: 1rem;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        border-radius: 1rem;
        height: 100%;
        background-color: #000;
    }
`;

export const ScrollCorner = styled(ScrollAreaPrimitive.Corner)`
    background-color: #000;
`;
