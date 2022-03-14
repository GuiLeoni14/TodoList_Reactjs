import { FormEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styles';
import icon_check from '../../assets/img/icon-check.svg';
import icon_plus from '../../assets/img/icon-plus.svg';

export enum ETypeButton {
    completed = 'completed',
    progress = 'progress',
    created = 'created',
    submit = 'submit',
}
type DefaultButtonProps = {
    text: string;
    handleClick?(): void;
    typeButton?: ETypeButton;
    customClass?: string;
};
export function DefaultButton({ text, handleClick, typeButton }: DefaultButtonProps) {
    if (typeButton === ETypeButton.completed) {
        return (
            <Button className={`${typeButton}`} onClick={handleClick}>
                <img src={icon_check} alt="check icon for status tasks" />
                {text}
            </Button>
        );
    }
    if (typeButton === ETypeButton.progress) {
        return (
            <Button className={`${typeButton}`} onClick={handleClick}>
                {text}
            </Button>
        );
    }
    if (typeButton === ETypeButton.created) {
        return (
            <Button className={`${typeButton}`} onClick={handleClick}>
                <img src={icon_plus} alt="" />
                {text}
            </Button>
        );
    }
    return (
        <Button className={`${ETypeButton.progress} ${typeButton}`} type={typeButton}>
            {text}
        </Button>
    );
}
