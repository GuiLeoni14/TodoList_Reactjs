import { FormEvent, HTMLInputTypeAttribute, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './styles';

type DefaultButtonProps = {
    text: string;
    children?: ReactNode;
    customClass?: string;
    type?: HTMLInputTypeAttribute;
    link?: string;
};
export function DefaultButton({ children, text, customClass, type = 'submit', link }: DefaultButtonProps) {
    if (link) {
        return <Link to={link}>{children}</Link>;
    }
    return <Button type={type} placeholder={text} className={customClass} />;
}
