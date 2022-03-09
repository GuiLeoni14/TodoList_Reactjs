import styled, { css } from 'styled-components';
import { FiEdit2, FiDelete } from 'react-icons/fi';

export enum IconEnum {
    edit = 'edit',
    delete = 'delete',
}

type IconProps = {
    type: IconEnum;
};

export const Container = styled.div`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    max-width: 25rem;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative;
    transition: box-shadow, transform 0.3s;
    &:hover {
        box-shadow: 0rem 0rem 0.8rem #000;
        transform: scale(1.1);
    }
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Title = styled.h3`
    font-size: 2rem;
`;
export const Description = styled.p`
    font-size: 1.8rem;
    text-align: justify;
`;

export const Icon = styled.div<IconProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -1rem;
    ${({ type }) =>
        type === 'edit'
            ? css`
                  right: 0;
                  background-color: green;
              `
            : css`
                  left: 0;
                  background-color: red;
              `}
    padding: 0.8rem;
    border-radius: 50%;
    cursor: pointer;
`;

export const IconEdit = styled(FiEdit2)`
    width: 2.5rem;
    height: 2.5rem;
`;
export const IconDelete = styled(FiDelete)`
    width: 2.5rem;
    height: 2.5rem;
`;
