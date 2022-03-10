import { FormEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styles';
import icon_check from '../../assets/img/icon-check.svg';
export enum ETypeButton {
    completed = 'completed',
    progress = 'progress',
}
type DefaultButtonProps = {
    text: string;
    handleClick?(): void;
    typeButton?: ETypeButton;
    customClass?: string;
};
export function DefaultButton({ text, handleClick, typeButton }: DefaultButtonProps) {
    return (
        <>
            {typeButton === ETypeButton.completed ? (
                <Button className={`${ETypeButton.completed} ${typeButton}`} onClick={handleClick}>
                    <img src={icon_check} alt="check icon for status tasks" />
                    {text}
                </Button>
            ) : (
                <Button className={`${ETypeButton.progress} ${typeButton}`} onClick={handleClick}>
                    {text}
                </Button>
            )}
        </>
    );
}
