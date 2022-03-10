import styled from 'styled-components';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

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
